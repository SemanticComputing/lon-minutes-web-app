import { constrainedMemory } from "process";

export default {
  languageLabel: 'English',
  html: {
    title: 'Minutes of Multilateralism',
    description: 'This is a dataset and semantic portal which aggregates nineteenth-century epistolary metadata from major Finnish cultural heritage organisations. The dataset comprises information on over 1,200,000 letters and over 100,000 individuals and organisations. The data is available as linked open data.'
  },
  appTitle: {
    short: '',
    long: 'League of Nations',
    mobile: '',
    subheading: `
      Minutes of Multilateralism on the Semantic Web
    `
  },
  selectEditionPerpective: 'Digital editions',
  selectPerspective: 'Choose a perspective to search for, browse and analyze the data',
  selectInformationPerspective: 'Information about the contributors and collections',
  mainPageImageLicence: 'Images used under license from Wikimedia Commons',
  backendErrorText: 'One of the backend services is currently unavailable. Please try again later.',
  mainPageLinkText: "Select example searches, visualizations, and linked information",
  mainPageLinks: [
      {
        title: 'Minutes mentioning Åland Islands',
        link: '/places/page/Q5689/speeches-and-references'
      },
      {
        title: 'People who died in Geneva',
        link: '/en/people/faceted-search/table?page=0&constraints=%5B%7B%22facetId%22%3A%22deathPlace%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B4%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Flon%2Fplaces%2FQ71%22%2C%22prefLabel%22%3A%22Geneva%22%2C%22instanceCount%22%3A23%7D%7D%7D%5D'
      }],
  mainPageDick: 'fehkufhekj',
  topBar: {
    feedback: 'feedback (TBA)',
    info: {
      info: 'Info',
      aboutTheProject: 'About the project',
      aboutTheProjectUrl: 'https://seco.cs.aalto.fi/projects/minutes/'
    },
    searchBarPlaceHolder: 'Search metadata',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions (TBA)',
    instructionsUrl: '#'
  },
  facetBar: {
    results: 'Results',
    activeFilters: 'Active filters:',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Sort',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Sorting options',
    sortAlphabetically: 'Sort alphabetically',
    sortByNumberOfSearchResults: 'Sort by number of search results',
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Search...',
    applyFacetSelection: 'apply',
    pieChart: {
      tooltip: 'Pie chart'
    }
  },
  tabs: {
    table: 'table',
    map: 'map',
    migrations: 'migrations',
    network: 'network',
    'person-network': 'network',
    export: 'export',
    'by-year': 'by year',
    'by-period': 'by period',
    'social-signatures': 'social signatures',
    'top-correspondences': 'top correspondences',
    'top-references': 'top references',
    'top-speakers': 'speakers',
    lifetimes: "Lifetimes",
    pie_chart: "Charts",
    csv: 'csv',
    metadata: 'source data',
    view: 'digital edition view',
    tieNetwork: 'Network',
    'speeches-and-references': 'speeches and references',
    heatmap: 'heatmap',
    statistics: 'statistics',
    download: 'download',
    sparql: 'sparql',
    share: 'share'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  lineChart: {
    productionCount: 'Production',
    transferCount: 'Transfer of custody',
    observationCount: 'Observation',
    sentCount: 'Sent',
    receivedCount: 'Received',
    allCount: 'All',
    average: 'Average',
    sender: 'Sender',
    sender1: 'Sender 1',
    sender2: 'Sender 2',
    both: 'Both'
  },
  "apexCharts": {
    "grouping": "Sort by:",
    "property": "Ominaisuus:",
    "chartType": "Chart type:",
    "pie": "Pie chart",
    "bar": "Column chart",
    "resultClasses": {
      "peopleByGender": "Gender",
      "peopleByNationality": "Nationality",
      "peopleByRepresented": "Represented country",
      "peopleByOccupation": "Occupation",
      "peopleByBirthplace": "Place of birth",
      "peopleByDeathplace": "Place of death",
      "Speakers": "Speakers",
      "SpeakerCountries": "Represented countries",
      "PeopleInMinutes": "Referenced people",
      "OrganizationsInMinutes": "Referenced organizations",
      "LocationsInMinutes": "Referenced locations",
      "ConceptsInMinutes": "Referenced concepts",
    }
  },
  exportToYasgui: 'open the result table query in LD browser',
  openInLinkedDataBrowser: 'open in linked data browser',
  resultsAsCSV: 'download the search results as a CSV table',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    }
  },
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the LoN Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Computationally generated data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in the         source data or the processing.
      </p>
    `
  },
  leafletMap: {
    basemaps: {
      mapbox: {
        'light-v10': 'Mapbox Light'
      },
      googleRoadmap: 'Google Maps',
      topographicalMapNLS: 'Topographical map (National Land Survey of Finland)',
      backgroundMapNLS: 'Background map (National Land Survey of Finland)'
    },
    externalLayers: {
      arkeologiset_kohteet_alue: 'Register of Archaeological Sites, areas',
      arkeologiset_kohteet_piste: 'Register of Archaeological Sites, points',
      karelianMaps: 'Karelian maps, 1:100 000 topographic (SeCo)',
      senateAtlas: 'Senate atlas, 1:21 000 topographic (SeCo)',
      'kotus:pitajat': 'Finnish parishes in 1938 (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueet': 'Dialectical regions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueosat': 'Dialectical subregions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-lansi-ita': 'Border between western and eastern dialects in Finland (Institute for the Languages of Finland)'
    },
    mapModeButtons: {
      markers: 'Markers',
      heatmap: 'Heatmap'
    },
    wrongZoomLevel: 'The map zoom level has to at least 11',
    wrongZoomLevelFHA: 'The map zoom level has to be at least 13 in order to show this layer',
    tooManyResults: 'More than 3000 results, please use clustered map or heatmap'
  },
  deckGlMap: {
    arcColouring: 'Arc colouring:',
    showMoreInformation: 'Click to show more information.',
    letterMigrations: {
      legendTitle: 'Arc colouring',
      legendFrom: 'Place: Sending',
      legendTo: 'Place of receiving',
      from: 'Place of sending:',
      to: 'Place of receiving:',
      count: 'Letter count:',
      listHeadingSingleInstance: 'Letter:',
      listHeadingMultipleInstances: 'Letters:'
    }
  },
  perspectives: {
    fullTextSearch: {
      properties: {
        prefLabel: {
          label: 'Title'
        },
        altLabel: {
          label: 'Alternative label'
        },
        type: {
          label: 'Type'
        },
        image: {
          label: 'Image'
        },
        maxScore: {
          label: 'Text search score'
        },
        number_of_activities: {
          label: 'Number of activities'
        }
      }
    },
    people: {
      label: 'People',
      facetResultsType: 'People',
      shortDescription: '',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
         
        From this perspective, you can search for information about the authors and recipients of the letters, the records            creators and, for certain materials, individuals mentioned in the letters themselves.<br>

        Different organisations and collections hold correspondence from the same individuals. These actors have been                 aggregated computationally, but there are still both wrongly aggregated and unaggregated actors in the data.                  Additionally, almost all letter collections contain letters from unidentified individuals, and the large number of            these is typical of mass metadata produced from letter collections.<br>

        You can browse the metadata using the filters on the left (above the results in the mobile version) or the facets. As         well as searching by name, you can limit your search by the gender or profession of the actor. Please note that               occupation information is only provided for individuals for whom additional information is available from external            data sources. The 'External data source' facet shows the proportion of actors linked to external data sources.<br>
        
        Much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in             the source data or the processing.<br>
        
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
          filters. 
          </p>
          The result view can be selected using the tabs:
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            The <strong>TABLE</STRONG> tab lists all the people in the data. One row of the table contains the information related to one person. Selecting the name of a person takes you to a more detailed Person instance page. Image(s): Wikidata/Wikimedia Commons.
          </li>
          <li>
            <strong>CHARTS</strong> column or bar charts visualizing the distributions of genders, nationalities, or occupations of the people.
          </li>
          <li>
            <strong>LIFETIMES</strong> tab depicts a time series of the years of birth and death of the people.
          </li>
          <li>
            <strong>TOP REFERENCES</strong> tab depicts a time series of the most frequently refered people in the minute speeches.
          </li>
          <li>
            The <strong>MAP</strong> visualises the known locations associated with the actors (birth and death places, countries related to nationality). If the location does not have precise geographical coordinates, it is displayed as part of the next larger unit. Clicking on the place markers will open a list of people associated with the place.
          </li><li>
            The <strong>HEATMAP</strong> visualises the known locations associated with the actors (birth and death places, countries related to nationality).
          </li>
          </li><li>
            The <strong>MIGRATIONS</strong> visualization tab the arcs are drawn between the places of birth and death. Notice that the visualization takes into account only the people out of whom this information is available.
          </li>
          <li>
            The <strong>NETWORK</strong> view visualises the correspondence network of the person under consideration. Due to             the large number of actors, often only a subset of actors is selected for the network. 
          </li>
          <li>
            The <strong>CSV</strong> tab allows you to download the results in tabular form to your own computer.
            </li>
            <li>
            From the <strong>SPARQL</strong> query tab,you can follow the link to the Yasgui service and see the query used              to retrieve the results from the database.
            </li>
            <li>
           The <strong>SHARE</strong> tab provides a permanent link to the search you have made. You can use it to find the search later and to refer to the material.
          </li>
        </ul>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          General information about the project is available at the <a href="https://seco.cs.aalto.fi/projects/minutes/"  target="_blank" rel="noopener noreferrer">project blog</a>.
      `,
      instancePage: {
        label: 'Person',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> page presents biographical information about the person. The information has been enriched from external sources.
            </li>
            <li>
              The <strong>MINUTES AND REFERENCES</strong> tab allows you to view the minutes and sentences with mentions to the person.
            </li>
            <li>
              <strong>NETWORK</strong> visualises a person's network based on the LoN membership during the same periods. Note that the number of actors is limited: the network can contain up to 60 actors within three degrees of the network ego, the main actor.
            </li>
            <li>
              On the <strong>EXPORT</strong> tab you can choose to view the SPARQL query used to generate the result table view into YASGUI query editor or to examine the letter data in the Saha editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Link to the information of the letter as linked open data'
        },
        prefLabel: {
          label: 'Name',
          description: 'Search for actors by name. The search is based on the Apache Lucene index search. As well as simple           searches, you can use wildcard matching; for example Finland*. Logical operators (AND, OR and NOT) can also be used,          but the search must then be written in parentheses, e.g., like this (Jean AND Sibelius).'
        },
        label: {
          label: 'Name'
        },
        gender: {
          label: 'Gender',
          description: `
          The gender of the actors has been automatically identified and there are still errors in the categorisation. 

        Male: persons identified as male on the basis of their first name. If only the initial or initials of the first               name are known, the person is counted as male. This is based on a manually screened sample. 

        Female: persons identified as female on the basis of their first name. 

        Unknown: an actor whose gender is not identified at all (surname only; first name rare; in the source data 'unknown',            'unidentified', 'okänd', etc.). 

        Not applicable: family, organisation, association, society, company, magazine or other grouping or association.
        `
        },
        speech: {
          label: 'Speeches',
          description: `
          The speeches given by this person in the minutes.
          `
        },
        mentioned_person: {
          label: 'Mentioned people',
          description: `
          People mentioned in the speeches given by this person in the minutes.
          `
        },
        number_of_references: {
          label: 'Number of references',
          description: `
          Number of references in the minutes related to this person.
          `
        },
        reference: {
          label: 'Reference',
          description: `
            How this person is referenced in the minutes.
          `
        },
        minute: {
          label: 'Minutes',
          description: `
            The minutes refering to this person.
          `
        },
        sentence: {
          label: 'Sentences',
          description: `
            The sentences refering to this person.
          `
        },
        related: {
          label: 'Related people',
          description: `
            Other people referred in the same minutes.
          `
        },
        archive: {
          label: 'United Nations Library and Archives',
          description: `
            Browse the related documents in the United Nations Library and Archives
          `
        },
        location: {
          label: 'Related locations',
          description: `
            Locations referred in the same minutes.
          `
        },
        organization: {
          label: 'Related organizations',
          description: `
            Organizations referred in the same minutes.
          `
        },
        miscellaneous: {
          label: 'Miscellaneous references',
          description: `
            Miscellaneous references mentioned in the same minutes.
          `
        },
        image: {
          label: 'Image',
          description: `
            Image source: Wikimedia Commons.
          `
        },
        type: {
          label: 'Actor type',
          description: 'The actors are divided into individuals, organisations, unindentified and families. Unidentified actors are mainly persons whose identity has not been identified in the cataloguing process. The recipients or senders of letters from unknown actors can be accessed by clicking on the Unknown heading and, on the next instance page, a URL link showing the correspondence data as linked open data.'
        },
        maxScore: {
          label: 'Text search score',
          description: ''
        },
        role: {
          label: 'Roles in organizations of the LoN',
          description: `Source: LONSEA.`
        },
        birthDate: {
          label: 'Birth time',
          description: `The date of birth of individuals that is mainly derived from external data sources, but some                      information is derived from the source data itself.`
        },
        birthDateTimespan: {
          label: 'Birth time',
          description: `The date of birth of individuals that is mainly derived from external data sources, but some                      information is derived from the source data itself.`
        },
        birthPlace: {
          label: 'Place of Birth',
          description: `Place of birth of the persons concerned. The information is derived from external data sources.`
        },
        represented: {
          label: 'Represented Country',
          description: `The country which a person was representing (Source: LONSEA)`
        },
        residence: {
          label: 'Place of Residency',
          description: `Place of residency of the persons concerned. The information is derived from external data sources.`
        },
        deathDate: {
          label: 'Death time',
          description: `The date of death of individuals that is mainly derived from external data sources, but some information is derived from the source data itself.`
        },
        deathDateTimespan: {
          label: 'Death time',
          description: `The date of death of individuals that is mainly derived from external data sources, but some information is derived from the source data itself.`
        },
        deathPlace: {
          label: 'Place of Death',
          description: `Place of death of the persons concerned. The information is derived from external data sources.`
        },
        altLabel: {
          label: 'Alternative names',
          description: `Name variants in source data and external data sources. A superscript indicates the source from which the information was obtained.`
        },
        description: {
          label: 'Description',
          description: `Information obtained from comments provided by digital editions included in the data. The language of the descriptions varies. A superscript indicates the source from which the information was obtained`
        },
        occupation: {
          label: 'Occupation',
          description: `Occupational data is only provided for actors for whom information is available in external sources (Wikidata, Biografiasampo, Akatemiasampo, etc.). A single actor may have several occupations. Please note, however             , that the visualisation shows the occupational coverage of the whole dataset and the co-occurrence of occupations, not the number of actors associated with an occupation.`
        },
        nationality: {
          label: 'Nationality',
          description: `Nationality data is only provided for actors for whom information is available in external sources (Wikidata, etc.). A single actor may have several nationalities.`
        },
        lonsea_organization: {
          label: 'LoN organization',
          description: `The organization(s) of the League of Nations to which the person belonged (Source: LONSEA).`
        },
        external: {
          label: 'External databases',
          description: `
            An external source of information that has been used to enrich the actor information in the dataset. The 'unknown'             group contains all actors for whom no information is available from external data sources.
          `
        },
        relative: {
          label: 'Relatives',
          description: `Family relatives of a person. 
          
          Data retrieved from external data sources like BiographySampo, AcademySampo and Wikidata, and only for                          relations included in the dataset.`
        },
        acquaintance: {
          label: 'Personal relations',
          description: `Personal relations to other people. 
          Data retrieved from external data sources like BiographySampo, AcademySampo, Wikidata, and ULAN, and only for                   relations included in the dataset.`
        },
        close_match: {
          label: 'Actors with similar names',
          description: `
            A list of people with a similar name but not automatically grouped into one or more actors. Linking the metadata to the people is an automatic process, so errors in deduplication may occur.
          `
        },
        metrics: {
          label: 'Network metrics',
          description: `
            The degree of centrality of the actor in the letter network. Each row corresponds to one centrality metric and                shows the centrality of the actor and, in brackets, their position in the overall network (# = number of actors               with higher centrality).
          `
        },
        numLetters: {
          label: 'Number of letters',
          description: `
          Total count of both sent and received letters
          `
        },
        numCorrespondences: {
          label: 'Number of correspondences',
          description: `
         This indicates how many actors the actor in question has been in contact with.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
            The number in brackets indicates the total number of letters exchanged between persons or organisations
          `
        },
        numSent: {
          label: 'Number of sent letters',
          description: ``
        },
        sentletter: {
          label: 'Sent letters',
          description: `
            List of sent letters.
          `
        },
        digital_edition: {
          label: 'Digital Edition',
          description: `
            Search for actors mentioned in digital editions
          `
        },
        numReceived: {
          label: 'Number of received letters',
          description: ``
        },
        receivedletter: {
          label: 'Received letters',
          description: `
            List of received letters.
          `
        },
        mentioningletter: {
          label: 'Mentioned in letters',
          description: `
          List of letters which mention this actor.
          `
        },
        data_provider: {
          label: 'Cultural heritage organization',
          description: `
            The organization holding the correspondence of the actor.
          `
        },
        data_provider_facet: {
          label: 'Cultural heritage organization',
          description: `
            Limit your search to the collections of a specific archive, library or museum. 
          `
          
          
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source where this actor is mentioned.
          `
        },
        knownLocation: {
          label: 'Known locations',
          description: `
            List of known locations. The number in parenthesis is the number of sent letters.
          `
        }
      }
    },
    minutes: {
      label: 'Minutes',
      facetResultsType: 'minutes',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      
      This perspective enables you to browse the minutes in the data. The text content show the color coded named entities: 
      <a href="#" class="identified_person">identified people</a>, 
      <a href="#" class="referenced_person">references to people</a>, 
      <a href="#" class="referenced_organization">organizations</a>,
      <a href="#" class="identified_location">identified locations</a>,
      <a href="#" class="referenced_location">references to locations</a>,
      <a href="#" class="referenced_date">times</a>, and 
      <a href="#" class="referenced_miscellaneous">miscellaneous references</a>.
        
        You can browse metadata using the filters or facets on the left (above the results in the mobile version).<br>
            
            Much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in             the source data or the processing.<br>
        
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
       The <strong>TABLE</STRONG> provides a list of all minutes. Each row represents one minute. Selecting the name of a minute displays more detailed information about it.
      </li>
      <li>
        The <strong>BY YEAR</strong> tab displays the annual number of minutes.
      </li>
      <li>
        <strong>CHARTS</strong> column or bar charts visualizing the people, organizations, locations, or concepts mentioned in the minutes.
      </li>
      <li>
        <strong>MAP</strong> visualizes the locations referenced in the minutes.
      </li>
      <li>
        <strong>HEATMAP</strong> visualization of the locations referenced in the minutes.
      </li>
      <li>
        The <strong>CSV</strong> tab allows you to download the results in tabular form to your own computer.
      </li>
      <li>
       From the <strong>SPARQL</strong> query tab, you can follow the link to the Yasgui service and see the query used to retrieve the results from the database.
      </li>
      <li>
        The <strong>SHARE</strong> tab provides a permanent link to the search you have made. You can use it to find the search later and to refer to the material.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Minutes',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              The <strong>TABLE</strong> view displays the results as a list.
              The text content show the color coded named entities: 
                <a href="#" class="identified_person">identified people</a>, 
                <a href="#" class="referenced_person">references to people</a>, 
                <a href="#" class="referenced_organization">organizations</a>,
                <a href="#" class="identified_location">identified locations</a>,
                <a href="#" class="referenced_location">references to locations</a>,
                <a href="#" class="referenced_date">times</a>, and 
                <a href="#" class="referenced_miscellaneous">miscellaneous references</a>.
            </li>
            <li>
              <strong>EXPORT</strong> view the SPARQL query used to generate the results, open the table view in the YASGUI query editor, and examine the letter data in the Saha editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Link to the information of fonds and collections as linked open data'
        },
        prefLabel: {
          label: 'Title',
          description: ''
        },
        search: {
          label: 'Search content',
          description: 'Search the content of the minutes'
        },
        year: {
          label: 'Year',
          description: `
            The year of the minute. 
          `
        },
        speaker: {
          label: 'Speaker',
          description: `
            Identified person speaking in the minute. 
          `
        },
        speaker_country: {
          label: 'Country of the speaker',
          description: `
            Country represented by the person speaking in the minute. 
          `
        },
        referenced_person: {
          label: 'Referenced people',
          description: `
            Identified people referenced in the content of the minute. 
          `
        },
        referenced_unknown_actor: {
          label: 'Referenced unknown actors',
          description: `
            Unidentified actors referenced in the content of the minute. 
            These are references that could not be linked to a known person found in the data sources.
          `
        },
        referenced_location: {
          label: 'Referenced location',
          description: `
            Locations referenced in the content of the minute. 
          `
        },
        referenced_organization: {
          label: 'Referenced organization',
          description: `
            Organizations referenced in the content of the minute. 
          `
        },
        referenced_date: {
          label: 'Referenced date',
          description: `
            Dates referenced in the content of the minute. 
          `
        },
        referenced_miscellaneous: {
          label: 'Miscellaneous references',
          description: `
            Miscellaneous references extracted from the minute contents. 
          `
        },
        content: {
          label: 'Content',
          description: `
            Content of the minute. 
          `
        },
        language: {
          label: 'Language',
          description: `
            Language(s) of the minute. 
          `
        },
        sidenote: {
          label: 'Footnote',
          description: `
            Footnotes on the original page. 
          `
        },
        pagenumber: {
          label: 'Page number',
          description: `
            Page number in the original document. 
          `
        },
        plenary_meeting: {
          label: 'Plenary meeting',
          description: ``
        },
        related: {
          label: 'Related minutes',
          description: `
            All records from the same assembly plenary meetings. 
          `
        },
        external: {
          label: 'External link',
          description: `
            Link to an external datasource providing more information. 
          `
        }
      }
    },
    speeches: {
      label: 'Speeches',
      facetResultsType: 'speeches',
      shortDescription: 'Speech',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      
      This perspective enables you to browse the speeches in the data. The text content show the color coded named entities: 
      <a href="#" class="identified_person">identified people</a>, 
      <a href="#" class="referenced_person">references to people</a>, 
      <a href="#" class="referenced_organization">organizations</a>,
      <a href="#" class="identified_location">identified locations</a>,
      <a href="#" class="referenced_location">references to locations</a>,
      <a href="#" class="referenced_date">times</a>, and 
      <a href="#" class="referenced_miscellaneous">miscellaneous references</a>.
        
        You can browse metadata using the filters or facets on the left (above the results in the mobile version).<br>
            
            Much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in             the source data or the processing.<br>
        
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
       The <strong>TABLE</STRONG> provides a list of all minutes. Each row represents one minute. Selecting the name of a minute displays more detailed information about it.
      </li>
      <li>
        The <strong>BY YEAR</strong> tab displays the annual number of minutes.
      </li>
      <li>
        <strong>CHARTS</strong> column or bar charts visualizing the people, organizations, locations, or concepts mentioned in the minutes.
      </li>
      <li>
        <strong>MAP</strong> visualizes the locations referenced in the minutes.
      </li>
      <li>
        <strong>HEATMAP</strong> visualization of the locations referenced in the minutes.
      </li>
      <li>
        The <strong>CSV</strong> tab allows you to download the results in tabular form to your own computer.
      </li>
      <li>
       From the <strong>SPARQL</strong> query tab, you can follow the link to the Yasgui service and see the query used to retrieve the results from the database.
      </li>
      <li>
        The <strong>SHARE</strong> tab provides a permanent link to the search you have made. You can use it to find the search later and to refer to the material.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Speech',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              The <strong>TABLE</strong> view displays the results as a list.
              The text content show the color coded named entities: 
                <a href="#" class="identified_person">identified people</a>, 
                <a href="#" class="referenced_person">references to people</a>, 
                <a href="#" class="referenced_organization">organizations</a>,
                <a href="#" class="identified_location">identified locations</a>,
                <a href="#" class="referenced_location">references to locations</a>,
                <a href="#" class="referenced_date">times</a>, and 
                <a href="#" class="referenced_miscellaneous">miscellaneous references</a>.
            </li>
            <li>
              <strong>EXPORT</strong> view the SPARQL query used to generate the results, open the table view in the YASGUI query editor, and examine the letter data in the Saha editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Link to the information of fonds and collections as linked open data'
        },
        prefLabel: {
          label: 'Title',
          description: ''
        },
        search: {
          label: 'Search content',
          description: 'Search the content of the speeches'
        },
        speechTimespan: {
          label: 'Speech time',
          description: `The timestamp of the speech.`
        },
        time: {
          label: 'Time',
          description: `
            The time of the speech. 
          `
        },
        speaker: {
          label: 'Speaker',
          description: `
            Identified person as the speech. 
          `
        },
        speaker_gender: {
          label: 'Gender of the speaker',
          description: ``
        },
        speaker_country: {
          label: 'Country of the speaker',
          description: `
            Country represented by the speaker. 
          `
        },
        image: {
          label: 'Image',
          description: `
            A possible image of the person. Source: Wikimedia Commons.
          `
        },
        minute: {
          label: 'Minute',
          description: `
            The minute in which the speech was delivered. 
          `
        },
        previous: {
          label: 'Previous speech',
          description: `
            Previous speech in the same minute. 
          `
        },
        next: {
          label: 'Next speech',
          description: `
            Next speech in the same minute. 
          `
        },
        referenced_person: {
          label: 'Referenced people',
          description: `
            Identified people referenced in the content of the speech. 
          `
        },
        referenced_unknown_actor: {
          label: 'Referenced unknown actors',
          description: `
            Unidentified actors referenced in the content of the speech. 
            These are references that could not be linked to a known person found in the data sources.
          `
        },
        referenced_location: {
          label: 'Referenced location',
          description: `
            Locations referenced in the content of the speech. 
          `
        },
        referenced_organization: {
          label: 'Referenced organization',
          description: `
            Organizations referenced in the content of the speech. 
          `
        },
        referenced_date: {
          label: 'Referenced date',
          description: `
            Dates referenced in the content of the speech. 
          `
        },
        referenced_miscellaneous: {
          label: 'Miscellaneous references',
          description: `
            Miscellaneous references extracted from the speech contents. 
          `
        },
        content: {
          label: 'Content',
          description: `
            Content of the speech. 
          `
        },
        language: {
          label: 'Language',
          description: `
            Language(s) of the speech. 
          `
        },
        sidenote: {
          label: 'Footnote',
          description: `
            Footnotes on the original page. 
          `
        },
        pagenumber: {
          label: 'Page number',
          description: `
            Page number in the original document. 
          `
        },
        plenary_meeting: {
          label: 'Plenary meeting',
          description: ``
        },
        related: {
          label: 'Related minutes',
          description: `
            All records from the same assembly plenary meetings. 
          `
        },
        external: {
          label: 'External link',
          description: `
            Link to an external datasource providing more information. 
          `
        }
      }
    },
    references: {
      label: 'References',
      facetResultsType: 'references',
      shortDescription: 'reference',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      In this view, you will find a summary of the organizations that have provided descriptive information on correspondence         .<br>         
      
      In the Dataset Description document, you will find a description of the organization's collection profile and their             letter collections, written by each organization itself. It also includes information produced by                             researchers at Aalto University and the University of Helsinki on the formats in which the material was obtained and              how it was processed and transformed into linked open data.
      </p>
      `,
      instancePage: {
        label: 'Reference',
        description: `
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes detailed imformation about each reference resource in the database.
          </li>
          <li>
            <strong>LETTERS AND ACTORS</strong> contains lists of letters and actors related to this place.
          </li>
          <li>
            <strong>TIMELINE OF LETTERS</strong> shows a time series with yearly amounts of letters.
            Notice that also the hiearchy is considered, e.g., on the page of a country all the letters sent from places within are also included. 
          </li>
          <li>
            <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Link to the information of the contributor as linked open data'
        },
        prefLabel: {
          label: 'Reference',
          description: 'The label of reference in the minutes'
        },
        number_of_references: {
          label: 'Number of references',
          description: `
          Number of references in the minutes related to this resource.
          `
        },
        referenced: {
          label: 'Referenced entity',
          description: 'The label of reference in the minutes'
        },
        altLabel: {
          label: 'Alternative label'
        },
        type: {
          label: 'Type',
          description: `
            Type of reference.
          `
        },
        minute: {
          label: 'Minutes',
          description: `
            Webpage of the cultural heritage organization.
          `
        },
        sentence: {
          label: 'Sentences',
          description: `
            The sentences refering to this person.
          `
        },
        close_match: {
          label: 'References with similar labels',
          description: `
            A list of references with a similar label but not automatically grouped into one or more references. Disambiguating the references is an automatic process, so errors in deduplication may occur.
          `
        },
      }
    },
    organizations: {
      label: 'Organizations',
      facetResultsType: 'organizations',
      shortDescription: 'Organization',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      In this view, you will find a summary of the organizations that have provided descriptive information on correspondence         .<br>         
      
      In the Dataset Description document, you will find a description of the organization's collection profile and their             letter collections, written by each organization itself. It also includes information produced by                             researchers at Aalto University and the University of Helsinki on the formats in which the material was obtained and              how it was processed and transformed into linked open data.
      </p>
      `,
      instancePage: {
        label: 'Organization',
        description: `
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes detailed imformation about each reference resource in the database.
          </li>
          <li>
            <strong>LETTERS AND ACTORS</strong> contains lists of letters and actors related to this place.
          </li>
          <li>
            <strong>TIMELINE OF LETTERS</strong> shows a time series with yearly amounts of letters.
            Notice that also the hiearchy is considered, e.g., on the page of a country all the letters sent from places within are also included. 
          </li>
          <li>
            <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Link to the information of the contributor as linked open data'
        },
        prefLabel: {
          label: 'Label'
        },
        altLabel: {
          label: 'Alternative labels'
        },
        number_of_references: {
          label: 'Number of references',
          description: `
          Number of references in the minutes related to this organization.
          `
        },
        minute: {
          label: 'Minutes',
          description: `
            The minutes refering to this organization.
          `
        },
        sentence: {
          label: 'Sentences',
          description: `
            The sentences refering to this organization.
          `
        },
        close_match: {
          label: 'Similar Organizations',
          description: 'A list of organizations having similar labels'
        },
        member: {
          label: 'Members',
          description: 'A list of members associated with this organization including their roles. Source LONSEA.'
        }
        
      }
    },
    concepts: {
      label: 'Concepts',
      facetResultsType: 'Concepts',
      shortDescription: 'Concept',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      In this view, you will find a summary of the organizations that have provided descriptive information on correspondence.<br>         
      
      In the Dataset Description document, you will find a description of the organization's collection profile and their             letter collections, written by each organization itself. It also includes information produced by                             researchers at Aalto University and the University of Helsinki on the formats in which the material was obtained and              how it was processed and transformed into linked open data.
      </p>
      `,
      instancePage: {
        label: "Concept",
        description: `
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes detailed imformation about each reference resource in the database.
          </li>
          <li>
            <strong>LETTERS AND ACTORS</strong> contains lists of letters and actors related to this place.
          </li>
          <li>
            <strong>TIMELINE OF LETTERS</strong> shows a time series with yearly amounts of letters.
            Notice that also the hiearchy is considered, e.g., on the page of a country all the letters sent from places within are also included. 
          </li>
          <li>
            <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Link to the information of the contributor as linked open data'
        },
        prefLabel: {
          label: 'Label'
        },
        altLabel: {
          label: 'Alternative labels'
        },
        number_of_references: {
          label: 'Number of references',
          description: `
          Number of references in the minutes related to this resource.
          `
        },
        minute: {
          label: 'Minutes',
          description: `
            The minutes refering to this concept.
          `
        },
        sentence: {
          label: 'Sentences',
          description: `
            The sentences refering to this concept.
          `
        },
        close_match: {
          label: 'Similar concepts',
          description: 'A list of concepts having similar labels'
        },
      }
    },
    places: {
      label: 'Places',
      facetResultsType: 'Places',
      shortDescription: '',
      longDescription: `
      
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      This view allows you to view the geographic information in the data. The data are based on place ontology, which includes countries, provinces, counties, towns, districts and villages, but also buildings such as churches, hospitals and schools.<br>
      The data (titles, coordinates, geographical hierarchy) are extracted from external sources such as Wikipedia.<br> 
      
      Please note that the data concern only a small part of the total data in the League of Nations and include the places mentioned in the LoN minutes or that are known to be the places of birth or death of some of the people in the dataset. The data also include places required for the construction of a geographical hierarchy.<br>
      
      Much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in the source data or the processing.<br>
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
      filters. The result view can be selected using the tabs:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        The <strong>TABLE</STRONG> lists all the locations of the data. Selecting a place takes you to a more detailed instance page for the place.
      </li>
     <li>
        The <strong>CSV</strong> tab allows you to download the results in tabular form to your own computer.
      </li>
      <li>
       From the <strong>SPARQL</strong> query tab, you can follow the link to the Yasgui service and see the query used to retrieve the results from the database.
      </li>
      <li>
        The <strong>SHARE</strong> tab provides a permanent link to the search you have made. You can use it to find the search later and to refer to the material.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Place',
        description: `
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes detailed imformation about each place resource in the database.
          </li>
          <li>
            <strong>LETTERS AND ACTORS</strong> contains lists of letters and actors related to this place.
          </li>
          <li>
            <strong>TIMELINE OF LETTERS</strong> shows a time series with yearly amounts of letters.
            Notice that also the hiearchy is considered, e.g., on the page of a country all the letters sent from places within are also included. 
          </li>
          <li>
            <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Link to the information of the place as linked open data'
        },
        prefLabel: {
          label: 'Name',
          description: `
            Place name.
          `
        },
        country: {
          label: 'Country',
          description: `
            Related country (source: Wikidata)
          `
        },
        continent: {
          label: 'Continent',
          description: `
            Related continent (source: Wikidata)
          `
        },
        location: {
          label: 'Coordinates',
          description: `
            Latitude and longitude of the place (source: Wikidata)

          `
        },
        broader: {
          label: 'Parent place',
          description: `
          Parent place, e.g. a municipality, county or country.
          `
        },
        narrower: {
          label: 'Places within',
          description: `
            Smaller places, e.g. towns and villages contained within the place.
            The optional number in parenthesis is the number of mentions of that place. 
          `
        },
        place: {
          label: 'Place',
          description: `
            The specific place(s) associated with the event.
          `
        },
        altLabel: {
          label: 'Alternative names',
          description: `
            Alternative names of the place.
          `
        },
        external: {
          label: 'External links',
          description: `
            External links.
          `
        },
        related: {
          label: 'Related actors',
          description: `
          Related actors, e.g. people or groups that have sent letters from this place.
          `
        },
        number_of_references: {
          label: 'Number of references',
          description: `
          Number of references in the minutes related to this place.
          `
        },
        represented: {
          label: 'Representatives',
          description: `The representatives of this country (Source: LONSEA)`
        },
        born: {
          label: 'People born',
          description: `
          List of people known to have born here.
          `
        },
        deceased: {
          label: 'People deceased',
          description: `
          List of people known to have deceased here.
          `
        },
        living: {
          label: 'People with known residence or nationality',
          description: `
          List of people known to have lived here or with a nationality in a case of a country.
          `
        },
        type: {
          label: 'Place type',
          description: `
            The type of the specific place(s) associated with the event.
          `
        },
        minute: {
          label: 'Minutes',
          description: `
          Minutes refering to this place.
          `
        },
        sentence: {
          label: 'Sentences',
          description: `
          The sentences refering to this location.
          `
        },
        reference: {
          label: 'Reference',
          description: `
            How this place is referenced in the minutes.
          `
        },
        image: {
          label: 'Image',
          description: `
            A possible image of the person. Source: Wikimedia Commons.
          `
        }
      }
    },
    occupations: {
      label: 'Occupation',
      facetResultsType: 'occupation',
      shortDescription: '',
      instancePage: {
        label: 'Proxy',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view provides detailed data about this occupation, e.g., list of people related to this occupation as well as list of related occupations.
            </li>
            <li>
              <strong>EXPORT</strong> view allows you to view the SPARQL query used to generate the result table view into YASGUI query editor or examine the occupation data in the Saha editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: 'Search actors by name. Search is based on Apache Lucene index search. In addition to simple searches, you can use wildcard matching, e.g. Finland*. You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
        },
        provided: {
          label: 'Provided resource',
          description: 'Same actor in all datasets.'
        },
        person: {
          label: 'People',
          description: `
            People related to the occupation.
          `
        },
        related: {
          label: 'Related occupations',
          description: `
            Related occupations.
          `
        },
        altLabel: {
          label: 'Alternative labels',
          description: `Alternative labels of the occupation, e.g., in different languages.`
        },
        description: {
          label: 'Description',
          description: `Short description of the actor. The descriptions might be in different languages.`
        },
        occupation: {
          label: 'Occupation',
          description: `Occupation of a person. Notice that the other types of actors do not have this value.`
        },
        external: {
          label: 'External databases',
          description: `
            Links to External databases.
          `
        },
        broader: {
          label: 'Broader concept of this occupation.',
          description: `
            Hiearchically broader concept of this occupation.
          `
        }
      }
    }
  },
  exportLink: {
    viewLabel: "Tab",
    viewInstructions: "Choose the tab in which the query will open",
    fieldLabel: "Generated link (read-only)",
    infoBody: "You can share the query you made by using the link below. The link is generated based on what you have selected for different facets and will open the search view of this perspective with those choices on the selected tab. You can change the opened tab to any of the supported ones using the dropdown menu below. If you make additional choices while on this page, the link will be automatically updated to include those.",
    warningTitle: "Generated link might be too long for some browsers",
    warningBody: "The current length of the generated link is more than 2,000 characters. Browsers have different limits for the maximum lengths of links they can handle. <strong>This link might not work on all browsers</strong> — you can reduce the length of the link by deselecting some facet options.",
    errorTitle: "Generated link is too long",
    errorBody: "The current length of the generated link is more than 15,800 characters. <strong>The server will refuse to handle requests that go over certain length limits</strong> — you can reduce the length of the link by deselecting some facet options.",
    copyLinkToClipboard: "Copy link to clipboard"
  }
}
