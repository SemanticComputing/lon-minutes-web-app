export const fullTextSearchProperties = `
VALUES (?type__id ?type__label ?pagetype ?value_prop)
{
  (crm:E21_Person "Person" "/people" :number_of_references)
  (crm:E74_Group "Group" "/organizations" :number_of_references)
  (crm:E53_Place "Place" "/places" :number_of_references)
  (skos:Concept "Concept" "/concepts" :number_of_references)
}

?id skos:prefLabel ?_label ; a ?type__id ; skos:prefLabel ?prefLabel__id .

FILTER (LANG(?prefLabel__id)='en')

OPTIONAL { ?id a/skos:prefLabel ?type__class }
BIND (COALESCE(?type__class, ?type__label) AS ?type__prefLabel)

BIND (?prefLabel__id as ?prefLabel__prefLabel)
BIND (CONCAT(?pagetype, "/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

OPTIONAL { ?id ?value_prop ?_num }
BIND (COALESCE(?_num, 0) AS ?num)

OPTIONAL {
  ?id sch:image ?_image__id ;
      skos:prefLabel ?_image__description ;
      skos:prefLabel ?_image__title .
  BIND (CONCAT(REPLACE(STR(?_image__id), "https*:", ""), "?width=40") as ?_image__url)
}
`

export const fullTextQuery = `
SELECT DISTINCT ?id ?prefLabel__id ?prefLabel__prefLabel ?prefLabel__dataProviderUrl ?type__id ?type__prefLabel 
	(SAMPLE(?_image__id) AS ?image__id) 
	(SAMPLE(?_image__description) AS ?image__description) 
	(SAMPLE(?_image__title) AS ?image__title) 
	(SAMPLE(?_image__url) AS ?image__url) 
	(SUM(?num) AS ?number_of_activities)
WHERE {
    <QUERY>
    <RESULT_SET_PROPERTIES>
  }
GROUP BY ?id ?prefLabel__id ?prefLabel__prefLabel ?prefLabel__dataProviderUrl ?type__id ?type__prefLabel 
ORDER BY DESC (SUM(?num)) STR(?prefLabel__id)
`