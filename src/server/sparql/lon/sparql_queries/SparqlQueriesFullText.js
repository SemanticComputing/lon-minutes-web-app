export const fullTextSearchProperties = `
VALUES (?type__id ?type__label ?pagetype ?value_prop)
{
  (crm:E21_Person "Person" "/people" :number_of_references)
  (crm:E74_Group "Group" "/organizations" :number_of_references)
  (crm:E53_Place "Place" "/places" :number_of_references)
  (skos:Concept "Concept" "/concepts" :number_of_references)
}

?id a ?type__id ; skos:prefLabel ?prefLabel__id .

OPTIONAL { ?id a/skos:prefLabel ?type__class }
BIND (COALESCE(?type__class, ?type__label) AS ?type__prefLabel)

BIND(?prefLabel__id as ?prefLabel__prefLabel)
BIND(CONCAT(?pagetype, "/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

?id ?value_prop ?_num .
BIND(REPLACE(CONCAT("     ", str(?_num)), "^.*(.{5})$", "$1")  AS ?number_of_activities)

OPTIONAL {
  ?id ^:proxy_for? [ 
        sch:image ?image__id ;
    	skos:prefLabel ?image__description ;
    	skos:prefLabel ?image__title 
    ]
  BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=40") as ?image__url)
}
`
