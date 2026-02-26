const perspectiveID = 'speeches'

export const speechesPropertiesFacetResults = `
BIND(?id as ?uri__id)
BIND(STR(?id) as ?uri__prefLabel)
BIND(?id as ?uri__dataProviderUrl)

{
  ?id portal:speaker ?speaker__id .
  ?speaker__id skos:prefLabel ?speaker__prefLabel .
  BIND(CONCAT("/speeches/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?speaker__dataProviderUrl)

  OPTIONAL { ?speaker__id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600") as ?image__url)
  }
}
UNION
{ # TODO remove later
  FILTER NOT EXISTS { ?id portal:speaker [] }
  ?id :speaker/skos:prefLabel ?speaker__prefLabel .
  FILTER (LANG(?speaker__prefLabel) = 'en')
}
UNION
{ 
  ?id :speaker_country/:refers_to ?speaker_country__id .
  ?speaker_country__id skos:prefLabel ?speaker_country__prefLabel .
  FILTER (LANG(?speaker_country__prefLabel) = 'en')
  BIND(CONCAT("/places/page/", REPLACE(STR(?speaker_country__id), "^.*\\\\/(.+)", "$1")) AS ?speaker_country__dataProviderUrl)
}
UNION
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION
{
  ?id crm:P4_has_time-span ?speechTimespan__id .
  ?speechTimespan__id skos:prefLabel ?speechTimespan__prefLabel .
  BIND(CONCAT("/speeches/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?speechTimespan__dataProviderUrl)
}
UNION
{
  SELECT DISTINCT ?id (CONCAT('<p><a href="/speeches/page/', REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),'">', COALESCE(?_label, 'SPEECH'), ':</a><br>', ?_content, '</p>') AS ?content)
  WHERE {
    ?id :html ?_content 
    OPTIONAL { ?id skos:prefLabel ?_label }
  }
}
`

export const speechPropertiesInstancePage = `
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(STR(?id) as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
}
UNION
{
  ?id crm:P4_has_time-span ?speechTimespan__id .
  ?speechTimespan__id skos:prefLabel ?speechTimespan__prefLabel .
  # BIND(CONCAT("/speeches/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?speechTimespan__dataProviderUrl)
}
UNION
{
  ?id dct:language/skos:prefLabel ?language
  FILTER (LANG(?language)='en')
}
UNION
{
  ?minute__id :has_speech ?id .
  ?minute__id skos:prefLabel ?minute__prefLabel .
  BIND(CONCAT("/minutes/page/", REPLACE(STR(?minute__id), "^.*\\\\/(.+)", "$1")) AS ?minute__dataProviderUrl)
}
UNION
{
  SELECT DISTINCT ?id (CONCAT('<p>', ?_content, '</p>') AS ?content) 
  WHERE {
    ?id :html ?_content
  }
}
UNION
{ 
  ?id :previous ?previous__id .
  ?previous__id skos:prefLabel ?_label ; :content ?_content . 
  BIND (CONCAT(?_label, ": ", SUBSTR(?_content, 1, 80), "...") AS ?previous__prefLabel)
  BIND(CONCAT("/speeches/page/", REPLACE(STR(?previous__id), "^.*\\\\/(.+)", "$1")) AS ?previous__dataProviderUrl)
}
UNION
{ 
  ?id ^:previous ?next__id .
  ?next__id skos:prefLabel ?_label ; :content ?_content . 
  BIND (CONCAT(?_label, ": ", SUBSTR(?_content, 1, 80), "...") AS ?next__prefLabel)
   BIND(CONCAT("/speeches/page/", REPLACE(STR(?next__id), "^.*\\\\/(.+)", "$1")) AS ?next__dataProviderUrl)
}
UNION
{ 
  ?id :speaker/:refers_to ?speaker__id .
  ?speaker__id skos:prefLabel ?speaker__prefLabel 
  BIND(CONCAT("/people/page/", REPLACE(STR(?speaker__id), "^.*\\\\/(.+)", "$1")) AS ?speaker__dataProviderUrl)

  OPTIONAL { ?speaker__id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600") as ?image__url)
  }
}
UNION
{ 
  ?id :speaker_country/:refers_to ?speaker_country__id .
  ?speaker_country__id skos:prefLabel ?speaker_country__prefLabel 
  BIND(CONCAT("/places/page/", REPLACE(STR(?speaker_country__id), "^.*\\\\/(.+)", "$1")) AS ?speaker_country__dataProviderUrl)
}
UNION
{
    ?id linguistics:referenceToPerson/:refers_to ?referenced_person__id .
    ?referenced_person__id skos:prefLabel ?referenced_person__prefLabel 
    BIND(CONCAT("/people/page/", REPLACE(STR(?referenced_person__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_person__dataProviderUrl)
}
UNION
{
    ?id linguistics:referenceToOrganization/:refers_to ?referenced_organization__id .
    ?referenced_organization__id skos:prefLabel ?referenced_organization__prefLabel 
    BIND(CONCAT("/organizations/page/", REPLACE(STR(?referenced_organization__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_organization__dataProviderUrl)
}
UNION
{
    ?id linguistics:referenceToLocation/:refers_to ?referenced_location__id .
    ?referenced_location__id skos:prefLabel ?referenced_location__prefLabel 
    BIND(CONCAT("/places/page/", REPLACE(STR(?referenced_location__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_location__dataProviderUrl)
}
UNION
{
    ?id linguistics:referenceToDate/:refers_to ?referenced_date__id .
    ?referenced_date__id skos:prefLabel ?referenced_date__prefLabel 
    BIND(CONCAT("/times/page/", REPLACE(STR(?referenced_date__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_date__dataProviderUrl)
}
UNION
{
    ?id linguistics:referenceToMiscellaneous/:refers_to ?referenced_miscellaneous__id .
    ?referenced_miscellaneous__id skos:prefLabel ?referenced_miscellaneous__prefLabel 
    BIND(CONCAT("/places/page/", REPLACE(STR(?referenced_miscellaneous__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_miscellaneous__dataProviderUrl)
}
UNION
{
  ?id foaf:page ?external__id .
  BIND (?external__id AS ?external__dataProviderUrl)
  BIND ("United Nations Library and Archives" AS ?external__prefLabel)
}
UNION
{
  SELECT DISTINCT ?id 
    ?related__id ?related__prefLabel 
    (CONCAT("/speeches/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  WHERE {
    ?id :key ?key .
    ?related__id :key ?key ; skos:prefLabel ?related__prefLabel .
  } ORDER BY STR(?related__id)
}
`

export const speechesByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?speech) AS ?count)
WHERE {
  <FILTER>

  ?speech a :Speech ;
    crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?tspan .
  BIND(year(xsd:date(?tspan)) AS ?category)
} 
GROUP BY ?category ORDER BY ?category
`

export const speechPlacesQuery = `
SELECT DISTINCT ?id ?lat ?long (COUNT(DISTINCT ?speech) AS ?instanceCount)
WHERE {
  <FILTER>
  ?speech a :Speech ; 
    linguistics:referenceToLocation/:refers_to ?id .
  ?id geo:lat ?lat ;
    geo:long ?long
} 
GROUP BY ?id ?lat ?long
`

export const speakersInSpeechesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?speech__id) AS ?instanceCount)
WHERE {
  ?speech__id a :Speech .
  
  <FILTER>
  
  ?speech__id portal:speaker ?category .
  ?category skos:prefLabel ?prefLabel ;
    a crm:E21_Person .
} GROUP BY ?category ?prefLabel ORDER BY DESC(?instanceCount) LIMIT 25
`

export const speakerCountriesInSpeechesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?speech__id) AS ?instanceCount)
WHERE {
  ?speech__id a :Speech .
  
  <FILTER>
  
  ?speech__id :speaker_country/:refers_to ?category .
  ?category skos:prefLabel ?prefLabel .
  FILTER (LANG(?prefLabel)='en')
} GROUP BY ?category ?prefLabel ORDER BY DESC(?instanceCount) LIMIT 25
`

export const peopleInSpeechesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?speech__id) AS ?instanceCount)
WHERE {
  ?speech__id a :Speech .
  
  <FILTER>
  
  ?speech__id linguistics:referenceToPerson/:refers_to ?category .
  ?category skos:prefLabel ?prefLabel ;
    a crm:E21_Person .
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount) LIMIT 25
`

export const topCorrespondenceFacetPageQuery = `
SELECT DISTINCT (COUNT(?id) AS ?count) ?speaker__label ("speaker" AS ?type) 
  (xsd:date(?_time) AS ?date)
  (year(xsd:date(?_time)) AS ?year)
WHERE {
    { SELECT DISTINCT ?speaker (REPLACE(STR(?_label), '^(.+) [0-9()–]+?$', '$1') AS ?speaker__label) WHERE {
      <FILTER>
      ?id a :Speech ;
              :speaker/:refers_to ?speaker ;
              crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?_time .
      
      ?speaker a crm:E21_Person ;
              skos:prefLabel ?_label .
    }
    GROUP BY ?speaker ?_label
    ORDER BY DESC(COUNT(?id))
    LIMIT 25

  }
  <FILTER> 
  ?id a :Speech ;
          :speaker/:refers_to ?speaker ;
          crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?_time .
}
GROUP BY ?_time ?speaker__label
ORDER BY ?_time
`

export const organizationsInSpeechesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?speech__id) AS ?instanceCount)
WHERE {
  ?speech__id a :Speech .
  
  <FILTER>
  
  ?speech__id linguistics:referenceToOrganization/:refers_to ?category .
  ?category skos:prefLabel ?prefLabel ;
    a crm:E74_Group .
  # FILTER (LANG(?prefLabel)='en')
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount) LIMIT 25
`
export const locationsInSpeechesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?speech__id) AS ?instanceCount)
WHERE {
  ?speech__id a :Speech .
  
  <FILTER>
  
  ?speech__id linguistics:referenceToLocation/:refers_to ?category .
  ?category skos:prefLabel ?prefLabel ;
    a crm:E53_Place .
  FILTER (LANG(?prefLabel)='en')
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount) LIMIT 25
`

export const conceptsInSpeechesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?speech__id) AS ?instanceCount)
WHERE {
  ?speech__id a :Speech .
  
  <FILTER>
  
  ?speech__id linguistics:referenceToMiscellaneous/:refers_to ?category .
  ?category skos:prefLabel ?prefLabel ;
    a skos:Concept .
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount) LIMIT 25
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  FILTER (LANG(?_label)='<LANG>')
  BIND(COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const speechesHeatmapQuery = `
SELECT DISTINCT ?id ?lat ?long 
  (COUNT(DISTINCT ?speech) AS ?instanceCount)
WHERE {
  <FILTER>
  ?speech a :Speech ; linguistics:referenceToLocation/:refers_to ?id .
  ?id geo:lat ?lat ; geo:long ?long 
} GROUP BY ?id ?lat ?long
`

export const speechesRelatedTo = `
{
  SELECT DISTINCT ?id ?related__id
  (COALESCE(?_label1, ?_label2, '<speech>') AS ?related__prefLabel) 
  (CONCAT("/speeches/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  WHERE {

      BIND (<ID> as ?id)
      <FILTER>
      
      ?related__id a :Speech ;
        linguistics:referenceToLocation/:refers_to ?id .
      OPTIONAL { ?related__id portal:speaker/skos:prefLabel ?_label1}
      OPTIONAL { ?related__id skos:prefLabel ?_label2}
      BIND (?related__id AS ?mention)
      
    } 
  }
`

export const networkLinksQuery = `
SELECT DISTINCT ?source 
    ?target 
    (COUNT(?speech) AS ?weight) 
    (STR(?weight) AS ?prefLabel)
WHERE {
  { 
    SELECT DISTINCT ?speech WHERE {
      
      <FILTER>
      
      FILTER EXISTS { ?speech linguistics:referenceToPerson/:refers_to [] }
      {
       ?speech portal:speaker ?id 
      }
      UNION
      {
        ?id (^portal:speaker)/linguistics:referenceToPerson/:refers_to/(^portal:speaker) ?speech
      }
    }
  }
  
  ?speech portal:speaker ?source ;
          linguistics:referenceToPerson/:refers_to ?target .
  
  ?target a crm:E21_Person .
  ?source a crm:E21_Person .
  FILTER (?source != ?target)

} GROUP BY ?source ?target ORDER BY DESC(?weight)
`

export const networkNodesFacetQuery = `
 SELECT DISTINCT ?id ?prefLabel ?class ?href
 WHERE {
   VALUES ?class { crm:E21_Person }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
    skos:prefLabel ?_label .
    
    BIND (REPLACE(?_label, '^(.+) [0-9()–-]+$', '$1') AS ?prefLabel)
    BIND (CONCAT("../../people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/person-network") AS ?href)
  }
`

export const csvQuerySpeeches = `
SELECT DISTINCT ?id ?label ?content ?language ?year ?source
	(GROUP_CONCAT(DISTINCT ?person_id; separator="|") AS ?people_references)
	(GROUP_CONCAT(DISTINCT ?place_id; separator="|") AS ?place_references)
WHERE {
  
  <FILTER>
  
  FILTER(BOUND(?id))

  ?id a :Speech ;
    skos:prefLabel ?label ;
    :content ?content . 
  
  OPTIONAL { 
    ?id dct:language/skos:prefLabel ?language .
    FILTER (LANG(?language) = "en")
  }
        
  OPTIONAL { ?id crm:P4_has_time-span/skos:prefLabel ?year }
  OPTIONAL { ?id foaf:page ?source }
  
  OPTIONAL { ?id linguistics:referenceToPerson/:refers_to ?person_id }
  OPTIONAL { ?id linguistics:referenceToLocation/:refers_to ?place_id }
} GROUP BY ?id ?label ?content ?language ?year ?source
ORDER BY STR(?id)
`


