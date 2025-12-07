const perspectiveID = 'occupations'

export const occupationPropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    ?id skos:broader ?broader__id .
    FILTER (?broader__id != ?id)
    ?broader__id skos:prefLabel ?broader__prefLabel .
    BIND(CONCAT("/occupations/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
  }
  UNION
  {
    ?person__id biocrm:has_occupation ?id ;
      skos:prefLabel ?person__prefLabel .
    FILTER EXISTS { [] :refers_to ?person__id }
    BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl) 
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
      FILTER (LANG(?_label) = 'en')
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
      OPTIONAL { ?narrower__id :number_of_references ?_num }
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
