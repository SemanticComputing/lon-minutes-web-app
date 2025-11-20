const perspectiveID = 'organizations'

export const organizationPropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)

  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    [] :refers_to ?id ; skos:prefLabel ?altLabel 
  }
  UNION
  { 
    ?id skos:closeMatch ?close_match__id .
    ?close_match__id skos:prefLabel ?close_match__prefLabel .
    BIND(CONCAT("/organizations/page/", REPLACE(STR(?close_match__id), "^.*\\\\/(.+)", "$1")) AS ?close_match__dataProviderUrl)
  }
  UNION
  {
    SELECT DISTINCT 
      ?id 
      ?minute__id ?minute__prefLabel 
      (CONCAT("/minutes/page/", REPLACE(STR(?minute__id), "^.*\\\\/(.+)", "$1")) AS ?minute__dataProviderUrl)
    WHERE {
      VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
      ?minute__id ?_prop  [ :refers_to ?id ] ;
      skos:prefLabel ?minute__prefLabel .
      } ORDER BY STR(?minute__id)
    }
  UNION
  {
    SELECT DISTINCT ?id (CONCAT('<div>', ?_content, '</div>') AS ?sentence) 
    WHERE {
      VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
      [] ?_prop [ :refers_to ?id ] ;
                  a :Sentence ;
                  :html ?_content
    }
  }
  UNION
  {
    SELECT DISTINCT ?id
        ?member__id 
        (CONCAT(COALESCE(?tspan, '?'), ', ', ?_label, ': ', ?role_label) AS ?member__prefLabel)
        (CONCAT("/people/page/", REPLACE(STR(?member__id), "^.*\\\\/(.+)", "$1")) AS ?member__dataProviderUrl)
    WHERE {
    	?evt__id :organization ?id ; skos:prefLabel ?evt__label .
    	?role__id crm:P11i_participated_in ?evt__id ; skos:prefLabel ?role_label .
      OPTIONAL { ?evt__id crm:P4_has_time-span/skos:prefLabel ?tspan }
    	?member__id biocrm:bearer_of ?role__id ; skos:prefLabel ?_label 
    } 
    ORDER BY COALESCE(?tspan, 'zzz') ?_label
  }
`
