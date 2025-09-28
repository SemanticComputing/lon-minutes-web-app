const perspectiveID = 'people'

export const personPropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  
  {
    ?id skos:prefLabel ?prefLabel__id
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
    ?id skos:altLabel ?altLabel 
  }
  UNION
  {
    ?id biocrm:has_gender/skos:prefLabel ?gender 
  }
  UNION
  {
    ?id crm:P98i_was_born/crm:P4_has_time-span/skos:prefLabel ?birthDate
  }
  UNION
  {
    ?id crm:P98i_was_born/crm:P7_took_place_at ?birthPlace__id .
    ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
  }
  UNION
  {
    ?id crm:P100i_died_in/crm:P4_has_time-span/skos:prefLabel ?deathDate
  }
  UNION
  {
    ?id crm:P100i_died_in/crm:P7_took_place_at ?deathPlace__id .
    ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
  }
  UNION
  { 
    ?id sch:nationality ?nationality__id .
    ?nationality__id skos:prefLabel ?nationality__prefLabel .
    FILTER(LANG(?nationality__prefLabel) = 'en')
    BIND (CONCAT("/places/page/", REPLACE(STR(?nationality__id), "^.*\\\\/(.+)", "$1")) AS ?nationality__dataProviderUrl)
  } 
  UNION
  {
    ?id biocrm:has_occupation ?occupation__id .
    ?occupation__id skos:prefLabel ?occupation__prefLabel .
    FILTER(LANG(?occupation__prefLabel) = 'en')
    BIND (CONCAT("/occupations/page/", REPLACE(STR(?occupation__id), "^.*\\\\/(.+)", "$1")) AS ?occupation__dataProviderUrl)
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600") as ?image__url)
  }
  # UNION
  # {
  #  ?id foaf:page ?external__id .
  #  ?external__id a/skos:prefLabel ?external__prefLabel .
  #  BIND (?external__id AS ?external__dataProviderUrl)
  #}
  UNION
  {
    ?reference__id :refers_to ?id ;
    skos:prefLabel ?reference__prefLabel .
    BIND(CONCAT("/references/page/", REPLACE(STR(?reference__id), "^.*\\\\/(.+)", "$1")) AS ?reference__dataProviderUrl)
  }
`

export const personPropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  
  {
    ?id skos:prefLabel ?prefLabel__id
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
    ?id biocrm:has_gender/skos:prefLabel ?gender 
  }
  UNION
  {
    ?id crm:P98i_was_born/crm:P4_has_time-span/skos:prefLabel ?birthDate
  }
  UNION
  {
    ?id crm:P98i_was_born/crm:P7_took_place_at ?birthPlace__id .
    ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
  }
  UNION
  {
    ?id crm:P100i_died_in/crm:P4_has_time-span/skos:prefLabel ?deathDate
  }
  UNION
  {
    ?id crm:P100i_died_in/crm:P7_took_place_at ?deathPlace__id .
    ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
  }
  UNION
  { 
    ?id sch:nationality ?nationality__id .
    ?nationality__id skos:prefLabel ?nationality__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?nationality__id), "^.*\\\\/(.+)", "$1")) AS ?nationality__dataProviderUrl)
    FILTER(LANG(?nationality__prefLabel) = 'en')
  } 
  UNION
  {
    ?id biocrm:has_occupation ?occupation__id .
    ?occupation__id skos:prefLabel ?occupation__prefLabel .
    BIND (CONCAT("/occupations/page/", REPLACE(STR(?occupation__id), "^.*\\\\/(.+)", "$1")) AS ?occupation__dataProviderUrl)
    FILTER(LANG(?occupation__prefLabel) = 'en')
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600") as ?image__url)
  }
  UNiON
  {
  	?id owl:sameAs|foaf:page ?external__id .
    ?external__id a/skos:prefLabel ?external__prefLabel .
    BIND (?external__id AS ?external__dataProviderUrl)
  }
`

export const peopleMinutesInstancePageQuery = `
SELECT DISTINCT * 
WHERE {
  BIND (<ID> as ?id)
  BIND (?id as ?uri__id)
  BIND (?id as ?uri__prefLabel)
  BIND (?id as ?uri__dataProviderUrl)

  {
    ?id skos:prefLabel ?label__id .
    BIND (?label__id as ?label__prefLabel)
  }
  UNION
  {
    SELECT DISTINCT ?id (CONCAT('<p>', ?_sentence, '</p>') AS ?sentence) WHERE {
    VALUES ?_prop { linguistics:referenceToDate linguistics:referenceToLocation linguistics:referenceToOrganization linguistics:referenceToPerson linguistics:referenceToMiscellaneous }
    ?reference__id :refers_to ?id .
    [] ?_prop ?reference__id ;
          a :Sentence ;
          :html ?_sentence
    }
  }
  UNION
  { SELECT DISTINCT ?id ?minute__id ?minute__prefLabel
      (CONCAT("/minutes/page/", REPLACE(STR(?minute__id), "^.*\\\\/(.+)", "$1")) AS ?minute__dataProviderUrl) 
    WHERE {
      ?minute__id linguistics:referenceToPerson/:refers_to ?id ;
      skos:prefLabel ?minute__prefLabel .
    } ORDER BY STR(?minute__id)
  }
  UNION
  {
    SELECT DISTINCT ?id ?related__id 
    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_minute)), ')') AS ?related__prefLabel)
    (CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl) 
    WHERE {
      ?_minute linguistics:referenceToPerson/:refers_to ?id, ?related__id .
      FILTER (?related__id != ?id)
      ?related__id skos:prefLabel ?_label .
    } GROUP BY ?id ?related__id ?_label ORDER BY DESC (COUNT(?_minute))
  }
  UNION
  {
    SELECT DISTINCT ?id ?location__id 
    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_minute)), ')') AS ?location__prefLabel)
    (CONCAT("/places/page/", REPLACE(STR(?location__id), "^.*\\\\/(.+)", "$1")) AS ?location__dataProviderUrl) 
    WHERE {
      ?_minute linguistics:referenceToPerson/:refers_to ?id;
      linguistics:referenceToLocation/:refers_to ?location__id .
      ?location__id skos:prefLabel ?_label .
    } GROUP BY ?id ?location__id ?_label ORDER BY DESC (COUNT(?_minute))
  }
  UNION
  {
    SELECT DISTINCT ?id ?organization__id 
    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_minute)), ')') AS ?organization__prefLabel)
    (CONCAT("/organizations/page/", REPLACE(STR(?organization__id), "^.*\\\\/(.+)", "$1")) AS ?organization__dataProviderUrl) 
    WHERE {
      ?_minute linguistics:referenceToPerson/:refers_to ?id;
      linguistics:referenceToOrganization/:refers_to ?organization__id .
      ?organization__id skos:prefLabel ?_label .
    } GROUP BY ?id ?organization__id ?_label ORDER BY DESC (COUNT(?_minute))
  }
  UNION
  {
    SELECT DISTINCT ?id ?miscellaneous__id 
    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_minute)), ')') AS ?miscellaneous__prefLabel)
    (CONCAT("/references/page/", REPLACE(STR(?miscellaneous__id), "^.*\\\\/(.+)", "$1")) AS ?miscellaneous__dataProviderUrl)
    WHERE {
      ?_minute linguistics:referenceToPerson/:refers_to ?id;
      linguistics:referenceToMiscellaneous ?miscellaneous__id .
      ?miscellaneous__id skos:prefLabel ?_label .
    } GROUP BY ?id ?miscellaneous__id ?_label ORDER BY DESC (COUNT(?_minute))
  }
}
`

export const peopleByGenderQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a crm:E21_Person .
  
  <FILTER>
  
  ?person__id biocrm:has_gender ?category .
  ?category skos:prefLabel ?prefLabel .
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount)
`

export const peopleByNationalityQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a crm:E21_Person .
  
  <FILTER>
  
  ?person__id sch:nationality ?category .
  ?category skos:prefLabel ?prefLabel .
  FILTER (LANG(?prefLabel) = "en")
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount)
`
export const peopleByOccupationQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a crm:E21_Person .
  
  <FILTER>
  
  ?person__id biocrm:has_occupation ?category .
  ?category skos:prefLabel ?prefLabel .
  FILTER (LANG(?prefLabel) = "en")
} GROUPBY ?category ?prefLabel ORDERBY DESC(?instanceCount)
`

export const ageQuery = `
SELECT ?category (count(?born) AS ?Births) (count(?deceased) AS ?Deaths)
WHERE {

  <FILTER>

  ?person__id a crm:E21_Person
  
  { 
    ?person__id crm:P98i_was_born/crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time .
    BIND (?person__id AS ?born)
  }
  UNION
  {
    ?person__id crm:P100i_died_in/crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time .
    BIND (?person__id AS ?deceased)
  }
  
  BIND (STR(year(?time)) AS ?category)
  
} GROUPBY ?category ORDER BY ?category
`

export const topCorrespondenceFacetPageQuery = `
SELECT DISTINCT (COUNT(?minute) AS ?count) ?reference__label ("reference" AS ?type) ?year (CONCAT(STR(?year), '-07-01') AS ?date) WHERE {
  <FILTER>

  {SELECT DISTINCT ?id (REPLACE(STR(?_label), '^(.+) [0-9()–]+?$', '$1') AS ?reference__label) WHERE {
      <FILTER>

      ?minute a :Minute ;
              linguistics:referenceToPerson/:refers_to ?id ;
              :year ?year .
      ?id a crm:E21_Person ;
              skos:prefLabel ?_label .
    }
    GROUP BY ?id ?_label
    ORDER BY DESC(COUNT(?minute))
    LIMIT 25
  }
  ?minute a :Minute ;
              linguistics:referenceToPerson/:refers_to ?id ;
              :year ?year .
}
GROUP BY ?year ?reference__label
ORDER BY ?year
`

export const peopleEventPlacesQuery = `
SELECT DISTINCT ?id ?lat ?long
  (COUNT(DISTINCT ?person) AS ?instanceCount)
WHERE {
  <FILTER>
  { 
    ?person crm:P98i_was_born/crm:P7_took_place_at ?id
  }
  UNION
  {
    ?person crm:P100i_died_in/crm:P7_took_place_at ?id
  }

  ?id a crm:E53_Place ; geo:lat ?lat ; geo:long ?long .
} GROUP BY ?id ?lat ?long
`

export const peopleEventHeatmapQuery = `
SELECT DISTINCT ?id ?lat ?long 
  (1 AS ?instanceCount)
WHERE {
  <FILTER>
  {
    ?person crm:P98i_was_born/crm:P7_took_place_at ?id
  }
  UNION
  {
    ?person crm:P100i_died_in/crm:P7_took_place_at ?id
  }
  UNION
  { ?person crm:P74_has_current_or_former_residence ?id }

  ?id a crm:E53_Place ; geo:lat ?lat ; geo:long ?long .
} GROUP BY ?id ?lat ?long
`
export const minutesRelatedTo = `
  OPTIONAL {
    <FILTER>
    { 
      ?related__id crm:P98i_was_born/crm:P7_took_place_at ?id
    }
    UNION
    {
      ?related__id crm:P100i_died_in/crm:P7_took_place_at ?id
    }
    FILTER EXISTS { [] :refers_to ?related__id }
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND (CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  } 
`

export const placePropertiesInfoWindow = `
  OPTIONAL { 
    ?id skos:prefLabel ?_label 
  }
  BIND (COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND (?prefLabel__id AS ?prefLabel__prefLabel)
  BIND (CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

//  facet perspective, migrarions tab
export const peopleMigrationsQuery = `
SELECT DISTINCT ?id 
?from__id ?from__prefLabel ?from__lat ?from__long
?to__id ?to__prefLabel ?to__lat ?to__long
(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
(CONCAT("/places/page/", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1")) AS ?to__dataProviderUrl)
(COUNT(DISTINCT ?person) as ?instanceCount)
WHERE {
  <FILTER>
  ?person a crm:E21_Person ;
    crm:P98i_was_born/crm:P7_took_place_at ?from__id ;
    crm:P100i_died_in/crm:P7_took_place_at ?to__id .
  
  FILTER(?from__id != ?to__id)

  ?from__id skos:prefLabel ?from__prefLabel ;
            geo:lat ?from__lat ;
            geo:long ?from__long .
  
  ?to__id skos:prefLabel ?to__prefLabel ;
          geo:lat ?to__lat ;
          geo:long ?to__long .

  BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), STR(places:), ""))) as ?id)  
}
GROUP BY ?id 
?from__id ?from__prefLabel ?from__lat ?from__long
?to__id ?to__prefLabel ?to__lat ?to__long
ORDER BY desc(?instanceCount)
`

//  facet perspective, migrarions tab
export const peopleMigrationsDialogQuery = `
SELECT * {
  <FILTER>
  ?id crm:P100i_died_in/crm:P7_took_place_at <TO_ID> ;
    crm:P98i_was_born/crm:P7_took_place_at <FROM_ID> ;
      skos:prefLabel ?prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
}
`

export const networkLinksQuery = `
SELECT DISTINCT ?source ?target ?weight (str(?weight) as ?prefLabel)
  WHERE {
    
  { SELECT DISTINCT ?id WHERE {
    
    <FILTER>
  
   [] :actor1|:actor2 ?actor ;
      :actor1|:actor2 ?id .
    } LIMIT 5000 
  }
   [] :actor1|:actor2 ?id ;
      :actor2 ?source ;
      :actor1 ?target ;
    :num_letters ?weight .
}`

export const correspondenceTimelineQuery = `
SELECT DISTINCT ?id ?source ?source__label ?target ?target__label ?date ?type ?year
WHERE 
{
VALUES ?node { <ID> } 
{
  ?node ^portal:sender ?letter .
  ?letter a :Letter ;
    portal:recipient ?target .
  ?target skos:prefLabel ?_target__label . 
  BIND (?node AS ?source)
} UNION {
  ?letter portal:recipient ?node ;
    a :Letter .
  ?source ^(portal:sender) ?letter ;
    skos:prefLabel ?_source__label . 
  BIND (?node AS ?target)
}
?target skos:prefLabel ?target__label .
?source skos:prefLabel ?source__label .
?letter :has_time-span/crm:P82a_begin_of_the_begin ?date .
BIND (year(?date) AS ?year)
} ORDER BY ?date
`

export const socialSignatureQuery = `
SELECT (?source AS ?id) (?source__label as ?id__label)
  ?target ?target__label
  ?time_0
WHERE 
{
  VALUES ?node { <ID> }
  {
    ?letter portal:sender ?node ;
      a :Letter ;
      portal:recipient ?target .
  
    BIND (?node AS ?source)
  } UNION {
    ?letter portal:recipient ?node ;
      a :Letter ;
      portal:sender ?source .
    BIND (?node AS ?target)
  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter :has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
} `

export const networkNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?class ?href
    (COALESCE(?_out, 0)+COALESCE(?_in, 0) AS ?num_letters)
  WHERE {
    VALUES ?class { :ProvidedActor }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
      skos:prefLabel ?_label .
    OPTIONAL { ?id :out_degree ?_out }
    OPTIONAL { ?id :in_degree ?_in }

    BIND (REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND (CONCAT("../../page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`

export const networkNodesFacetQuery = `
 SELECT DISTINCT ?id ?prefLabel ?class ?href
 (COALESCE(?_out, 0)+COALESCE(?_in, 0) AS ?num_letters)
 WHERE {
   VALUES ?class { :ProvidedActor }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
    skos:prefLabel ?_label .
    OPTIONAL { ?id :out_degree ?_out }
    OPTIONAL { ?id :in_degree ?_in }
    
    BIND (REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND (CONCAT("../../people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`

export const topCorrespondenceInstancePageQuery = `
SELECT DISTINCT ?id 
  (REPLACE(?source__label, ' [(][0-9-]+[)]$', '') AS ?from__label)
  (REPLACE(?target__label, ' [(][0-9-]+[)]$', '') AS ?to__label)
  (xsd:date(CONCAT(STR(?year), '-01-01')) AS ?date) 
  ?type
  ?year
  (COUNT(DISTINCT ?letter) AS ?count)
WHERE
{
  VALUES ?id { <ID> }
  {
    ?letter portal:sender ?id ;
      a :Letter ;
      portal:recipient ?target .
    ?target skos:prefLabel ?_target__label .

    BIND ("to" AS ?type)
    BIND (?id AS ?source)
  }
  UNION
  {
    ?letter portal:recipient ?id ;
      a :Letter ;
      portal:sender ?source .
    ?source skos:prefLabel ?_source__label .

    BIND (?id AS ?target)
    BIND ("from" AS ?type)

  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter :estimated_year ?year .

  OPTIONAL {
    [] :proxy_for ?id ;
       :birthDate/crm:P82b_end_of_the_end ?birth_end .
    BIND (year(?birth_end) AS ?birth)
  }
  FILTER (!bound(?birth) || (bound(?birth) && ?birth<?year))

  OPTIONAL {
    [] :proxy_for ?id ; 
      :deathDate/crm:P82b_end_of_the_end ?death_end .
    BIND (year(?death_end) AS ?death)
  }
  FILTER (!bound(?death) || (bound(?death) && ?year<=?death))
} GROUP BY ?id ?source__label ?target__label ?year ?type
`

export const sentReceivedQuery = `
SELECT DISTINCT (STR(?year) as ?category) 
  (count(distinct ?sent_letter) AS ?sentCount) 
  (count(distinct ?received_letter) AS ?receivedCount) 
  ((?sentCount + ?receivedCount) as ?allCount)
WHERE {
  BIND (<ID> as ?id)

  {
    ?sent_letter portal:sender ?id ; 
                 :estimated_year ?year
  } 
  UNION 
  {
    ?received_letter portal:recipient ?id ;
	                 :estimated_year ?year
  }
  FILTER (BOUND(?year))

  OPTIONAL {
    [] :proxy_for ?id ;
        :birthDate/crm:P82a_begin_of_the_begin ?_birth .
    BIND (year(?_birth) AS ?birth)
  }
  FILTER ((bound(?birth) && ?birth<?year) || !bound(?birth))

  OPTIONAL {
    [] :proxy_for ?id ;
        :deathDate/crm:P82b_end_of_the_end ?_death .
    BIND (year(?_death) AS ?death)
  }
  FILTER ((bound(?death) && ?year<=?death) || !bound(?death))
} 
GROUP BY ?year ORDER BY ?year
`

export const sentReceivedInstancePageQuery = `
  SELECT DISTINCT (STR(?year) as ?category) 
    (count(distinct ?sent_letter) AS ?sentCount) 
    (count(distinct ?received_letter) AS ?receivedCount) 
    ((?sentCount + ?receivedCount) as ?allCount)
  WHERE {
    BIND (<ID> as ?id)
    {
      ?sent_letter portal:sender ?id ; 
        a :Letter ;
        :estimated_year ?year .
    } 
    UNION 
    {
      ?received_letter portal:recipient ?id ;
        a :Letter ;
        :estimated_year ?year .
    }
    FILTER (BOUND(?year))

    OPTIONAL {
      [] :proxy_for ?id ;
        :birthDate/crm:P82b_end_of_the_end ?birth_end .
      BIND (year(?birth_end) AS ?birth)
    }
    FILTER (!bound(?birth) || (bound(?birth) && ?birth<?year))

    OPTIONAL {
      [] :proxy_for ?id ;
       :deathDate/crm:P82b_end_of_the_end ?death_end .
       BIND (year(?death_end) AS ?death)
    }
    FILTER (!bound(?death) || (bound(?death) && ?year<=?death))
  }
  GROUP BY ?year
  ORDER BY ?year
`

export const csvQueryPeople = `
SELECT DISTINCT ?id ?label ?type ?gender 
?prefix ?family_name ?given_name
?number_of_sent_letters ?number_of_received_letters 
(SAMPLE(?birth) AS ?birth_time) ?floruit
(SAMPLE(?death) AS ?death_time)

WHERE {
  
  <FILTER> 
  FILTER(BOUND(?id))

  ?id skos:prefLabel ?label .

  OPTIONAL {
    ?id skosxl:prefLabel ?xl .
    OPTIONAL { ?xl sch:familyName ?family_name }
    OPTIONAL { ?xl sch:givenName ?given_name }
    OPTIONAL { ?xl :name_addition ?prefix }
  }
  OPTIONAL {
    ?id :out_degree ?number_of_sent_letters
  }
  OPTIONAL
  {
    ?id :in_degree ?number_of_received_letters
  }
  OPTIONAL
  { 
    ?id :floruit/skos:prefLabel ?floruit 
  }
  OPTIONAL
  {
    ?id biocrm:has_gender/skos:prefLabel ?gender
  }
  
  ?proxy :proxy_for ?id ; a/skos:prefLabel ?type
  
  OPTIONAL
  {
    ?proxy :birthDate/skos:prefLabel ?birth
  }
  OPTIONAL
  {
    ?proxy :deathDate/skos:prefLabel ?death
  }
} 
GROUP BY ?id ?label ?type ?gender
  ?prefix ?family_name ?given_name
  ?number_of_sent_letters ?number_of_received_letters ?floruit 
ORDER BY DESC(?number_of_sent_letters) ?label `
