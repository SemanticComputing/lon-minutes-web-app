const perspectiveID = 'places'

export const placePropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  
  {
    ?id skos:prefLabel ?prefLabel__id .
    FILTER (LANG(?prefLabel__id)='<LANG>')
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNiON
  {
    ?id skos:broader ?broader__id .
    FILTER (?broader__id != ?id)
    ?broader__id skos:prefLabel ?broader__prefLabel .
    FILTER (LANG(?broader__prefLabel)='<LANG>')
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
  }
  UNION
  {
    ?id :country ?country__id .
    ?country__id skos:prefLabel ?country__prefLabel .
    FILTER (LANG(?country__prefLabel)='<LANG>')
    BIND(CONCAT("/places/page/", REPLACE(STR(?country__id), "^.*\\\\/(.+)", "$1")) AS ?country__dataProviderUrl)
  }
  UNION
  {
    ?id :number_of_references ?number_of_references
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600") as ?image__url)
  }
`

export const placePropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    ?id a ?type__id .
    ?type__id skos:prefLabel ?type__prefLabel .
    BIND (?type__id as ?type_dataProviderUrl)
  }
  UNION
  {
    ?id skos:broader ?broader__id .
    FILTER (?broader__id != ?id)
    ?broader__id skos:prefLabel ?broader__prefLabel .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
  }
  UNION
  {
      ?id :country ?country__id .
      ?country__id skos:prefLabel ?country__prefLabel .
      BIND(CONCAT("/places/page/", REPLACE(STR(?country__id), "^.*\\\\/(.+)", "$1")) AS ?country__dataProviderUrl)
  }
  UNION
  { 
    SELECT 
      ?id ?narrower__id 
      (CONCAT(?_label, IF(BOUND(?_num),CONCAT(" (",STR(?_num),")"), "")) AS ?narrower__prefLabel)
      (CONCAT("/places/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl)
    WHERE
    {
      ?narrower__id skos:broader ?id ; skos:prefLabel ?_label .
      FILTER (?narrower__id != ?id && LANG(?_label)='<LANG>')
      OPTIONAL { ?narrower__id :number_of_references ?_num }
    } 
    ORDER BY DESC(COALESCE(?_num)) ?_label 
  }
  UNION
  { ?id owl:sameAs ?external__id .
    ?external__id a/skos:prefLabel ?external__classlabel .
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND(COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND(?external__id AS ?external__dataProviderUrl)
  }
  UNION
  { ?id foaf:page ?external__id .
    ?external__id a/skos:prefLabel ?external__classlabel .
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND(COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND(?external__id AS ?external__dataProviderUrl)
  }
  UNION
  {
    ?id skos:prefLabel ?altLabel 
    FILTER (LANG(?altLabel)!='<LANG>')
  }
  UNION
  {
    ?id skos:altLabel ?altLabel .
  }
  UNION
  {
    ?id geo:lat ?lat ; geo:long ?long .
    BIND (CONCAT('lat ', STR(xsd:decimal(?lat)), ', long ',STR(xsd:decimal(?long))) as ?location)
  }
  UNION
  {
    ?id :number_of_references ?number_of_references
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
      BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600") as ?image__url)
    }
  `

export const placeLinksInstancePageQuery = `
SELECT *
WHERE {
  BIND(<ID> as ?id)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)

  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    SELECT DISTINCT ?id (CONCAT('<div>', ?_content, '</div>') AS ?sentence) 
      WHERE {
        VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
        ?reference__id :refers_to ?id .
        [] ?_prop ?reference__id ;
            a :Sentence ;
            :html ?_content
    }
  }
  UNION
  {
    SELECT DISTINCT ?id 
      ?reference__id ?reference__prefLabel
      (CONCAT("/references/page/", REPLACE(STR(?reference__id), "^.*\\\\/(.+)", "$1")) AS ?reference__dataProviderUrl)
      ?minute__id ?minute__prefLabel
      (CONCAT("/minutes/page/", REPLACE(STR(?minute__id), "^.*\\\\/(.+)", "$1")) AS ?minute__dataProviderUrl)
    WHERE {
        ?reference__id :refers_to ?id ;
            skos:prefLabel ?reference__prefLabel .
        
        ?minute__id linguistics:referenceToLocation ?reference__id ;
            skos:prefLabel ?minute__prefLabel .
    } ORDER BY STR(?minute__id)
  } 
  UNION
  {
    ?born__id crm:P98i_was_born/crm:P7_took_place_at ?id ;
      skos:prefLabel ?born__prefLabel .
    BIND(CONCAT("/people/page/", REPLACE(STR(?born__id), "^.*\\\\/(.+)", "$1")) AS ?born__dataProviderUrl)
  }
  UNION
  {
    ?deceased__id crm:P100i_died_in/crm:P7_took_place_at ?id ;
      skos:prefLabel ?deceased__prefLabel .
    BIND(CONCAT("/people/page/", REPLACE(STR(?deceased__id), "^.*\\\\/(.+)", "$1")) AS ?deceased__dataProviderUrl)
  }
}
`

export const csvQueryPlaces = `
SELECT DISTINCT ?id ?label 
	(xsd:decimal(?lat) AS ?latitude)
	(xsd:decimal(?long) AS ?longitude)
	?country ?country_id 
	?broader ?broader_id 
WHERE {
  
  <FILTER>
  
  FILTER(BOUND(?id))
  ?id skos:prefLabel ?label .

  OPTIONAL
  {
    ?id skos:broader ?broader_id .
    ?broader_id skos:prefLabel ?broader
  }
  OPTIONAL
  {
    ?id :country ?country_id .
    ?country_id skos:prefLabel ?country
  }

  OPTIONAL 
  {
    ?id wgs84:lat ?lat ;
        wgs84:long ?long
  }
}
`