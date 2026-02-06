const perspectiveID = 'minutes'

export const minutesPropertiesFacetResults = `
BIND(?id as ?uri__id)
BIND(STR(?id) as ?uri__prefLabel)
BIND(?id as ?uri__dataProviderUrl)

{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION
{
  ?id crm:P4_has_time-span/skos:prefLabel ?year
}
UNION
{
  SELECT DISTINCT ?id (CONCAT('<p>', ?_content, '</p>') AS ?content) 
  WHERE {
    ?id :html ?_content
  }
}
`

export const minutePropertiesInstancePage = `
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(STR(?id) as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
}
UNION
{
  ?id crm:P4_has_time-span/skos:prefLabel ?year
}
UNION
{
  ?id dct:language/skos:prefLabel ?language
  FILTER (LANG(?language)='en')
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
  ?id :has_speeches/:speaker ?speaker__id .
  ?speaker__id skos:prefLabel ?speaker__prefLabel 
  BIND(CONCAT("/people/page/", REPLACE(STR(?speaker__id), "^.*\\\\/(.+)", "$1")) AS ?speaker__dataProviderUrl)
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
    (CONCAT("/minutes/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  WHERE {
    ?id :key ?key .
    ?related__id :key ?key ; skos:prefLabel ?related__prefLabel .
  } ORDER BY STR(?related__id)
}
UNION
{
  ?id :sidenote ?sidenote .
}
UNION
{
  ?id :page_number ?pagenumber .
}
`

export const minutesByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?minute) AS ?count)
WHERE {
  <FILTER>

  ?minute a :Minute ;
    crm:P4_has_time-span/skos:prefLabel ?category .
} 
GROUP BY ?category ORDER BY ?category
`

export const minutePlacesQuery = `
SELECT DISTINCT ?id ?lat ?long (COUNT(DISTINCT ?minute) AS ?instanceCount)
WHERE {
  <FILTER>
  ?minute linguistics:referenceToLocation/:refers_to ?id .
  ?id geo:lat ?lat ; geo:long ?long
} 
GROUP BY ?id ?lat ?long
`

export const speakersInMinutesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?minute__id) AS ?instanceCount)
WHERE {
  ?minute__id a :Minute .
  
  <FILTER>
  
  ?minute__id :has_speeches/:speaker ?category .
  ?category skos:prefLabel ?prefLabel ;
    a crm:E21_Person .
} GROUP BY ?category ?prefLabel ORDER BY DESC(?instanceCount) LIMIT 25
`

export const speakerCountriesInMinutesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?minute__id) AS ?instanceCount)
WHERE {
  ?minute__id a :Minute .
  
  <FILTER>
  
  ?minute__id :has_speeches/:speaker_country ?category .
  ?category skos:prefLabel ?prefLabel .
  FILTER (LANG(?prefLabel)='en')
} GROUP BY ?category ?prefLabel ORDER BY DESC(?instanceCount) LIMIT 25
`

export const peopleInMinutesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?minute__id) AS ?instanceCount)
WHERE {
  ?minute__id a :Minute .
  
  <FILTER>
  
  ?minute__id linguistics:referenceToPerson/:refers_to ?category .
  ?category skos:prefLabel ?prefLabel ;
    a crm:E21_Person .
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount) LIMIT 25
`

export const topCorrespondenceFacetPageQuery = `
SELECT DISTINCT (COUNT(?id) AS ?count) ?speaker__label ("speaker" AS ?type) ?year (CONCAT(STR(?year), '-07-01') AS ?date) WHERE {
    { SELECT DISTINCT ?speaker (REPLACE(STR(?_label), '^(.+) [0-9()–]+?$', '$1') AS ?speaker__label) WHERE {
      <FILTER> 
      ?id a :Minute ;
              :has_speeches/:speaker ?speaker ;
              crm:P4_has_time-span/skos:prefLabel ?year .
      
      ?speaker a crm:E21_Person ;
              skos:prefLabel ?_label .
    }
    GROUP BY ?speaker ?_label
    ORDER BY DESC(COUNT(?id))
    LIMIT 25

  }
  <FILTER>
  ?id a :Minute ;
          :has_speeches/:speaker ?speaker ;
          crm:P4_has_time-span/skos:prefLabel ?year .
}
GROUP BY ?year ?speaker__label
ORDER BY ?year
`

export const organizationsInMinutesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?minute__id) AS ?instanceCount)
WHERE {
  ?minute__id a :Minute .
  
  <FILTER>
  
  ?minute__id linguistics:referenceToOrganization/:refers_to ?category .
  ?category skos:prefLabel ?prefLabel ;
    a crm:E74_Group .
  # FILTER (LANG(?prefLabel)='en')
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount) LIMIT 25
`
export const locationsInMinutesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?minute__id) AS ?instanceCount)
WHERE {
  ?minute__id a :Minute .
  
  <FILTER>
  
  ?minute__id linguistics:referenceToLocation/:refers_to ?category .
  ?category skos:prefLabel ?prefLabel ;
    a crm:E53_Place .
  FILTER (LANG(?prefLabel)='en')
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount) LIMIT 25
`

export const conceptsInMinutesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?minute__id) AS ?instanceCount)
WHERE {
  ?minute__id a :Minute .
  
  <FILTER>
  
  ?minute__id linguistics:referenceToMiscellaneous/:refers_to ?category .
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

export const minutesHeatmapQuery = `
SELECT DISTINCT ?id ?lat ?long 
  (1 AS ?instanceCount)
WHERE {
  <FILTER>
  ?minute linguistics:referenceToLocation/:refers_to ?id .
  ?id geo:lat ?lat ; geo:long ?long 
} GROUP BY ?id ?lat ?long
`

export const minutesRelatedTo = `
{
  SELECT DISTINCT ?id ?related__id
  (CONCAT(?_plabel, ' (', STR(COUNT(DISTINCT ?sent_letter)), ')') AS ?related__prefLabel) 
  (CONCAT("/minutes/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  WHERE {

      BIND (<ID> as ?id)
      # no filters
      
      ?related__id linguistics:referenceToLocation/:refers_to ?id ;
                             skos:prefLabel ?_plabel .
      BIND (?related__id AS ?sent_letter)
      
    } GROUP BY ?id ?related__id ?_plabel
    ORDER BY DESC(COUNT(DISTINCT ?sent_letter))
  }
`

export const letterEmbedInstancePageQuery = `
SELECT ?id ?url 
  WHERE { 
  BIND (<ID> as ?id)
  {
    ?id :metadata ?_metadata .
    {
      ?_metadata foaf:page ?url .
    }
  }
}
`

export const csvQueryMinutes = `
SELECT DISTINCT ?id ?label ?content ?language ?year ?source
	(GROUP_CONCAT(DISTINCT ?person_id; separator="|") AS ?people_references)
	(GROUP_CONCAT(DISTINCT ?place_id; separator="|") AS ?place_references)
WHERE {
  
  <FILTER>
  
  FILTER(BOUND(?id))

  ?id a :Minute ;
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


