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
  ?id :year ?year
}
UNION
{
  ?id :html ?content
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
  ?id :year ?year
}
UNION
{
  ?id :html ?content
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
`

/**
 * Notice some optimization, both TOP CORRESPONDENCES queries
 * use only the precision of one year
 * 
 * Also the number of results is limited to 100000
 */
export const topCorrespondenceFacetPageQuery = `
SELECT DISTINCT 
  (REPLACE(?_from__label, ' [(][fl. 0-9-]+[)]$', '') AS ?from__label)
  (REPLACE(?_to__label, ' [(][fl. 0-9-]+[)]$', '') AS ?to__label)
  ?type
  ?year
  (xsd:date(CONCAT(STR(?year),'-01-01')) AS ?date)
  (COUNT(DISTINCT ?id) AS ?count)
WHERE {

  { SELECT DISTINCT ?id WHERE {
      { 
        SELECT DISTINCT ?actor WHERE {
          ?id a :Letter .
          <FILTER>
          
          ?id portal:recipient|portal:sender ?actor
        }
        GROUP BY ?actor
        ORDER BY DESC(COUNT(?id))
        LIMIT 25
      }
      ?id portal:recipient|portal:sender ?actor
    } LIMIT 400000
  }

  <FILTER>

  ?id portal:recipient/skos:prefLabel ?_to__label ; 
      :estimated_year ?year ;
      portal:sender/skos:prefLabel ?_from__label .

  VALUES ?type { "from" "to" }
} 
GROUP BY ?_from__label ?_to__label ?type ?year
ORDER BY DESC(?count)
`

export const lettersByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?letter) AS ?count)
WHERE {
  <FILTER>

  ?letter a :Letter ;
    :estimated_year ?category .
} 
GROUP BY ?category ORDER BY ?category
`

export const yearlyLettersFacetPageQuery = `
SELECT DISTINCT (STR(?year) as ?category) (count(distinct ?id) AS ?letterCount)
WHERE {
  <FILTER>
  
  ?id a :Letter ;
      :has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
  BIND (year(?time_0) AS ?year)
} 
GROUP BY ?year
ORDER BY ?year
`

export const sendingPlacesMapQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?letter) AS ?instanceCount)
WHERE {
  <FILTER>
  
  ?letter :was_sent_from|:was_sent_to ?id .
  ?id a crm:E53_Place ; geo:lat ?lat ; geo:long ?long .

} GROUP BY ?id ?lat ?long
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  FILTER (LANG(?_label)='<LANG>')
  BIND(COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const peopleRelatedTo = `
{ 
  SELECT DISTINCT ?id ?referenced_person__id
  (CONCAT(?_plabel, ' (', STR(COUNT(DISTINCT ?sent_letter)), '+', STR(COUNT(DISTINCT ?received_letter)), ')') AS ?referenced_person__prefLabel) 
  (CONCAT("/actors/page/", REPLACE(STR(?referenced_person__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_person__dataProviderUrl)
  WHERE {

      BIND (<ID> as ?id)
      <FILTER>
	    
      { 
        ?letter_id :was_sent_from ?id ; portal:sender ?referenced_person__id .
        BIND (?letter_id AS ?sent_letter)
      }
      UNION
      { 
        ?letter_id :was_sent_to ?id ; portal:recipient ?referenced_person__id .
        BIND (?letter_id AS ?received_letter)
      }
     	
      ?referenced_person__id skos:prefLabel ?_plabel
      
    } GROUP BY ?id ?referenced_person__id ?_plabel
    ORDER BY DESC( COUNT(DISTINCT ?sent_letter)+ COUNT(DISTINCT ?received_letter))
  }
`

export const csvQueryLetters = `
  SELECT DISTINCT ?id ?label 
  (GROUP_CONCAT(STR(?sender_id); separator="|") AS ?sender_ids)
  (GROUP_CONCAT(?sender; separator="|") AS ?senders)
  (GROUP_CONCAT(STR(?recipient_id); separator="|") AS ?recipient_ids)
  (GROUP_CONCAT(?recipient; separator="|") AS ?recipients)
  (GROUP_CONCAT(?timespan; separator="|") AS ?timespans)
  ?datasource ?fonds
  WHERE {
    <FILTER>

    FILTER(BOUND(?id))
    ?id a :Letter ; 
      skos:prefLabel ?label .
    OPTIONAL
    {
      ?id portal:sender ?sender_id .
      ?sender_id skos:prefLabel ?sender ; a []
    }
    OPTIONAL
    {
      ?id portal:recipient ?recipient_id . 
      ?recipient_id skos:prefLabel ?recipient ; a []
    }
    OPTIONAL
    {
      ?id :has_time-span [ skos:prefLabel ?timespan ; a [] ]
    }
    OPTIONAL
    {
      ?id :fonds [ a [] ; skos:prefLabel ?fonds ]
    }
    OPTIONAL
    { 
      ?id :original_data_provider/skos:prefLabel ?datasource .
      FILTER(LANG(?datasource)='en')
    }
  }
  GROUP BY ?id ?label ?datasource ?fonds
  # ORDER BY ?label
  LIMIT 50000`

export const sendingPlacesHeatmapQuery = `
  SELECT DISTINCT ?id ?lat ?long (1 as ?instanceCount) # for heatmap
  WHERE {
    <FILTER>

    ?id :was_sent_from [ geo:lat ?lat ; geo:long ?long ]
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

