const perspectiveID = 'references'

export const referencePropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  { 
    VALUES (?cls ?perspective) { 
      (:ReferencedPerson "/people/page/")
      (:ReferencedLocation "/places/page/")
      (:ReferencedDate "/times/page/") }
    ?id :refers_to ?referenced__id ; 
        a ?cls .
    ?referenced__id skos:prefLabel ?referenced__prefLabel .
    BIND(CONCAT(?perspective, REPLACE(STR(?referenced__id), "^.*\\\\/(.+)", "$1")) AS ?referenced__dataProviderUrl)
  }
  UNION
  {
    VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
    ?minute__id ?_prop ?id ;
                skos:prefLabel ?minute__prefLabel .
    
    BIND(CONCAT("/minutes/page/", REPLACE(STR(?minute__id), "^.*\\\\/(.+)", "$1")) AS ?minute__dataProviderUrl)
    
    ?_prop skos:altLabel ?type .
  }
  UNION
  {
    SELECT DISTINCT ?id (CONCAT('<div>', ?_content, '</div>') AS ?sentence) 
    WHERE {
      VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
      [] ?_prop ?id ;
        a :Sentence ;
        :html ?_content
    }
  }
  UNION
  { 
    SELECT DISTINCT ?id 
    	?related__id 
    	(CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_actor)), ')') AS ?related__prefLabel)
    	(CONCAT("/occupations/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl) 
    WHERE {
	    ?_actor biocrm:has_occupation ?id ;
    	   biocrm:has_occupation ?related__id .
      FILTER (?id != ?related__id)
     	?related__id skos:prefLabel ?_label.
    } 
    GROUP BY ?id ?related__id ?_label 
    ORDER BY DESC(COUNT(DISTINCT ?_actor))
  }
  UNION
  { SELECT 
      ?id 
      ?narrower__id 
      (CONCAT(?_label, IF(BOUND(?_num),CONCAT(" (",STR(?_num),")"), "")) AS ?narrower__prefLabel)
      (CONCAT("/places/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl)
    WHERE {
    ?narrower__id skos:broader ?id ;
      skos:prefLabel ?_label .
    FILTER (?narrower__id != ?id)
      OPTIONAL { ?narrower__id :number_of_events ?_num }
    } ORDER BY DESC(COALESCE(?_num)) ?_label 
  }
  UNION
  { 
    ?id owl:sameAs ?external__id .
    BIND (?external__id AS ?external__prefLabel)
    BIND (?external__id AS ?external__dataProviderUrl)
  }
  UNION
  { 
    ?id skos:altLabel ?altLabel 
  }
`
