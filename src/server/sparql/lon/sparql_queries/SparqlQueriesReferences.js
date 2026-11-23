const perspectiveID = 'references'

export const referencePropertiesInstancePage = `
  BIND (?id as ?uri__id)
  BIND (?id as ?uri__prefLabel)
  BIND (?id as ?uri__dataProviderUrl)

  {
  BIND (<ID> AS ?id)
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    BIND (<ID> AS ?id)
    ?id skos:altLabel ?altLabel 
  }
  UNION
  {
    VALUES (?cls ?perspective) { 
      (:ReferencedPerson "/people/page/")
      (:ReferencedLocation "/places/page/")
      (:ReferencedDate "/times/page/") }
    BIND (<ID> AS ?id)
    ?id :refers_to ?referenced__id ; 
        a ?cls .
    ?referenced__id skos:prefLabel ?referenced__prefLabel .
    BIND(CONCAT(?perspective, REPLACE(STR(?referenced__id), "^.*\\\\/(.+)", "$1")) AS ?referenced__dataProviderUrl)
  }
  UNION
  {
    SELECT DISTINCT ?id (COUNT(?_minute) AS ?number_of_references)
    WHERE {
      BIND (<ID> AS ?id)
      VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
      ?_minute ?_prop ?id ; a :Minute .
    } GROUP BY ?id
  }
  UNION
  {
    SELECT DISTINCT ?id ?type ?minute__id 
      (CONCAT(?_abr, ': ', ?_label) as ?minute__prefLabel) 
      (CONCAT("/minutes/page/", REPLACE(STR(?minute__id), "^.*\\\\/(.+)", "$1")) AS ?minute__dataProviderUrl)
    WHERE {
      BIND (<ID> AS ?id)
      VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
      
      ?minute__id ?_prop ?id ;
        a :Minute ;
        skos:prefLabel ?_label ;
        :in_dataset/skos:altLabel ?_abr .      
      ?_prop skos:altLabel ?type .
    }
  }
  UNION
  {
    SELECT DISTINCT ?id (CONCAT('<div>', ?_content2, '</div>') AS ?sentence) 
    WHERE {
      BIND (<ID> AS ?id)
      VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
      [] ?_prop ?id ;
        a :Sentence ;
        :html ?_content .
      BIND (REPLACE(?_content,
        CONCAT(
          '(<a href[^<]+',
          REPLACE(STR(?id), "^.*\\\\/(.+)$", "$1"), '"[^<]+</a>)'),
        '<b>$1</b>') AS 
        ?_content2)
    }
  }
  UNION
  { 
    SELECT DISTINCT ?id ?related__id 
    	(CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_actor)), ')') AS ?related__prefLabel)
    	(CONCAT("/occupations/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl) 
    WHERE {
      BIND (<ID> AS ?id)
	    ?_actor biocrm:has_occupation ?id ;
    	   biocrm:has_occupation ?related__id .
      FILTER (?id != ?related__id)
     	?related__id skos:prefLabel ?_label.
    } 
    GROUP BY ?id ?related__id ?_label 
    ORDER BY DESC(COUNT(DISTINCT ?_actor))
  }
  UNION
  { SELECT ?id ?narrower__id
      (CONCAT(?_label, IF(BOUND(?_num),CONCAT(" (",STR(?_num),")"), "")) AS ?narrower__prefLabel)
      (CONCAT("/places/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl)
    WHERE {
      BIND (<ID> AS ?id)
      ?narrower__id skos:broader ?id ;
        skos:prefLabel ?_label .
      FILTER (?narrower__id != ?id)
        OPTIONAL { ?narrower__id :number_of_references ?_num }
    } ORDER BY DESC(COALESCE(?_num)) ?_label 
  }
  UNION
  {
    BIND (<ID> AS ?id)
    ?id owl:sameAs ?external__id .
    BIND (?external__id AS ?external__prefLabel)
    BIND (?external__id AS ?external__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> AS ?id)
    ?id skos:altLabel ?altLabel 
  }
  UNION
  {
    BIND (<ID> AS ?id)
    ?id skos:closeMatch ?close_match__id .
    ?close_match__id skos:prefLabel ?close_match__prefLabel .
    BIND(CONCAT("/references/page/", REPLACE(STR(?close_match__id), "^.*\\\\/(.+)", "$1")) AS ?close_match__dataProviderUrl)
  }
`
