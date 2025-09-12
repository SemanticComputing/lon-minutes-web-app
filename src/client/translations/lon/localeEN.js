import { constrainedMemory } from "process";

export default {
  languageLabel: 'English',
  html: {
    title: 'League of Nations',
    description: 'This is a dataset and semantic portal which aggregates nineteenth-century epistolary metadata from major Finnish cultural heritage organisations. The dataset comprises information on over 1,200,000 letters and over 100,000 individuals and organisations. The data is available as linked open data.'
  },
  appTitle: {
    short: '',
    long: 'League of Nations',
    mobile: '',
    subheading: `
      League of Nations minutes on the Semantic Web
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
        title: 'TODO ...',
        link: '/actors/page/p0000000000000000869/letters'
      },
      {
        title: '... TODO',
        link: '/actors/page/p0000000000000000869/letters'
      }],
  mainPageDick: 'fehkufhekj',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      aboutTheProject: 'About the project',
      aboutTheProjectUrl: 'https://seco.cs.aalto.fi/projects/coco/',
      dataStatistics: 'Data overview / statistics'
    },
    searchBarPlaceHolder: 'Search metadata',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions',
    instructionsUrl: 'https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub',
    editionPerspectives: 'Digital editions'

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
    export: 'export',
    'by-year': 'by year',
    'letters-by-year': 'timeline of letters',
    'by-period': 'by period',
    'letter-network': 'network of letters',
    'social-signatures': 'social signatures',
    'top-correspondences': 'top correspondences',
    'top-references': 'top references',
    lifetimes: "Lifetimes",
    pie_chart: "Charts",
    csv: 'csv',
    metadata: 'source data',
    view: 'digital edition view',
    letter: 'letter',
    sentReceivedByPlace: 'timeline of letters',
    correspondenceTimeline: 'Letter Timeline',
    sentReceivedByTie: 'Timeline',
    tieNetwork: 'Network',
    letters: 'letters',
    'minutes-and-references': 'minutes and references',
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
      "speechesByParty": "puhujan puolue",
      "speechesByGender": "puhujan sukupuoli",
      "speechesByLanguage": "puheen kieli",
      "speechesByType": "puheen tyyppi",
      "peopleByGender": "Gender",
      "peopleByNationality": "Nationality",
      "peopleByOccupation": "Occupation",
      "peopleByElectoralDistrict": "edustajat vaalipiireittäin",
      "peopleByCommittee": "edustajat valiokunnittain",
      "peopleByParliamentarygroup": "edustajat eduskuntaryhmittäin",
      "peopleByParty": "edustajat puolueittain",
      "ministersByElectoralterm": "ministerit vaalikausittain",
      "ministersByGovernment": "ministerit hallituksittain"
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
        used in the CoCo Portal. Click the Open in Linked Data Browser on button on the
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
            The <strong>TABLE</STRONG> tab lists all the actors in the data. One row of the table contains the information                related to one actor. Selecting the name of an actor takes you to a more detailed Actor instance page. Image(s):              Wikidata/Wikimedia Commons.
          </li>
          <li>
            The <strong>MAP</strong> visualises the known locations associated with the actors (birth and death places, places             where letters are sent and received). If the location does not have precise geographical coordinates, it is                   displayed as part of the next larger unit. Clicking on the place markers will open a list of people associated                with the place, with explanations.
          </li>
          <li>
            The <strong>NETWORK</strong> view visualises the correspondence network of the person under consideration. Due to             the large number of actors, often only a subset of actors is selected for the network. 
          </li>
          <li>
            The <strong>CSV</strong> tab allows you to download the results in tabular form to your own computer.
            </li>
            <li>
            From the <strong>SPARQL QUERY</strong> tab,you can follow the link to the Yasgui service and see the query used              to retrieve the results from the database.
            </li>
            <li>
           The <strong>SHARE</strong> tab provides a permanent link to the search you have made. You can use it to find the search later and to refer to the material.
          </li>
        </ul>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          General information about the project is available at the <a href="https://seco.cs.aalto.fi/projects/coco/"  target="_blank" rel="noopener noreferrer">project blog</a>.
      `,
      instancePage: {
        label: 'Person',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>GENERAL INFORMATION</STRONG> page presents biographical information about the person. The information has been enriched from external sources.
            </li>
            <li>
              The <strong>LETTERS</strong> tab allows you to view the letters sent and received by the actor in more detail.                  Please note that not all actors mentioned in the dataset will have this information available (e.g. the                       persons mentioned in the letters). 
            </li>
            <li>
              The <strong>TIMELINE</strong> presents letters sent and received by the actor in question as a line graph. The              zoom tools in the top right corner allow you to view more detailed time periods on the graph. shows time series of                 the letters sent or recieved by the actor.
            
              The letters known to have been sent over multiple years are evenly distributed throughout that period.
            </li>
            <li>
              <strong>TOP CORRESPONDENCE</strong> page shows the 20 largest sets of correspondence by an actor over a timeline                 . Note that the majority of correspondence only has start and end years (e.g. 1860-1895), in which case the                       letters of that correspondence are spread evenly over that time period. The zoom tools in the top right                       -hand corner allow you to view more detailed periods on the chart.
            </li>
            <li>
              <strong>NETWORK OF LETTERS</strong> visualises an actor's correspondence network. Note that the number of actors is limited: the network can contain up to 60 actors within three degrees of the network ego, the main actor.
            </li>
            <li>
             The <strong>SOCIAL SIGNATURES</strong> view shows the persistence of an actor's correspondence, i.e. the                         quantitative changes of the largest correspondence in different time periods over the total duration of the                   actor's correspondence. The horizontal axis indicates the extent of correspondence with the actor (1 = most                 letters) and the vertical axis the percentage. The visualisation takes into account both letters sent and                       received.
            </li>
            <li>
              <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor               and examine the letter data in the Saha editor.
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
        reference: {
          label: 'Reference',
          description: `
            How this person is referenced in the minutes.
          `
        },
        minute: {
          label: 'Minute',
          description: `
            The minutes refering to this person.
          `
        },
        sentence: {
          label: 'Sentence',
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
          label: 'Actor role',
          description: `The actors derived from the source data are categorised as either senders or recipients of letters, or             as records creators. One actor can have several roles. Additionally, some datasets have been machine-searched for             actors mentioned in the letters' contents. 
          
          If you are only interested in the metadata of the letters, please exclude the actors mentioned in the letter                    contents from the search.`
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
          description: `Place of birth of the persons concerned. The information is derived from external data sources. The superscript indicates the data sources from which the information was obtained.`
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
          description: `Place of death of the persons concerned. The information is derived from external data sources. The superscript indicates the data sources from which the information was obtained.`
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
          description: `Occupational data is only provided for actors for whom information is available in external sources               (Wikidata, Biografiasampo, Akatemiasampo, etc.). A single actor may have several occupations. Please note, however             , that the visualisation shows the occupational coverage of the whole dataset and the co-occurrence of occupations             , not the number of actors associated with an occupation.`
        },
        nationality: {
          label: 'Nationality',
          description: `Nationality data is only provided for actors for whom information is available in external sources (Wikidata, etc.). A single actor may have several nationalities.`
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
        rel: {
          label: 'Related actors',
          description: `
            Related actors, e.g. parents, spouses, acquaintances.
          `
        },
        similar: {
          label: 'Actors with similar names',
          description: `
            A list of actors with a similar name but not automatically grouped into one or more actors. Linking the                       letter metadata to the actors is an automatic process, so errors in actor recognition may occur.
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
        in_fonds: {
          label: 'Fonds',
          description: `
            Fonds containing letters related to this actor. 
            The name of the archival organization is shown in parenthesis after the name of the fonds,
            as well as the number of (sent+received) letters. 
            (Notice that all letters do not necessarily belong to a fonds.)
          `
        },
        created_fonds: {
          label: 'Created Fonds',
          description: `
            THe fonds where this actor is marked as the records creator.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            All letter collections in the dataset .
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
      <a href="#" class="referenced_location">locations</a>,
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
       The <strong>TABLE</STRONG> provides a list of all the letter collections. Each row represents one collection. Selecting the name of a collection displays more detailed information about it.
      </li>
      <li>
        The <strong>BY YEAR</strong> tab displays the annual number of letters held in collections in the form of a line graph. Please note that not all letters in the dataset are attached to a collection. Use the zoom tools in the top right corner to view more detailed periods on the graph.
      </li>
      <li>
        <strong>MAP</strong> visualises the locations (places of sending and receiving) of letters attached to collections.
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
              The <strong>TABLE</strong> view displays the results in a list.
            </li>
            <li>
              <strong>EXPORT</strong> view the SPARQL query used to generate the results, open the table view in the YASGUI query editor, and examine the letter data in the Saha editor.
            </li>
            <li>
              The text content show the color coded named entities: 
                <a href="#" class="referenced_person">people</a>, 
                <a href="#" class="referenced_organization">organizations</a>,
                <a href="#" class="referenced_location">locations</a>,
                <a href="#" class="referenced_date">times</a>, and 
                <a href="#" class="referenced_miscellaneous">miscellaneous entities</a>.
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
          label: 'Minute',
          description: 'The label of the Minute'
        },
        year: {
          label: 'Year',
          description: `
            The year of the minute. 
          `
        },
        referenced_person: {
          label: 'Referenced people',
          description: `
            People referenced in the content of the minute. 
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
            Language of the minute. 
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
        }
      }
    },
    places: {
      label: 'Places',
      facetResultsType: 'Places',
      shortDescription: '',
      longDescription: `
      
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      This view allows you to view the geographic information in the data. The data are based on place ontology, which                includes countries, provinces, counties, towns, districts and villages, but also buildings such as churches, hospitals         and schools.<br>
      The data (titles, coordinates, geographical hierarchy) are based on external sources such as WikipediA anD YSO.<br> 
      
      Please note that the data concern only a small part of the total data in the League of Nations and include the places where           letters were sent and, in some rare cases, received, and, in the case of digital editions, the places                     mentioned in the letters. The data also include places required for the construction of a geographical hierarchy.<br>
      
      Much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in             the source data or the processing.<br>
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
      filters. The result view can be selected using the tabs:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        The <strong>TABLE</STRONG> lists all the locations of the data. One row of the table contains the geographical                information related to a place and the total number of "correspondence events" (number of letters sent and mentions of             that place in the letters) that took place there. Selecting a place takes you to a more detailed instance page for             that place.
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
            Related country.
          `
        },
        location: {
          label: 'Coordinates',
          description: `
            Latitude and longitude of the place.
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
            The optional number in parenthesis is the number of letter sendings and mentions of that place. 
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
          Number of letter sendings and references related to this place. 
          A detailed list about the letters can be seen on the instance page tab "LETTERS AND ACTORS"
          `
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
              <strong>TABLE</STRONG> view provides detailed data about this actor.
            </li>
            <li>
              <strong>LETTERS</strong> show the available information about letters sent or received by this person.
              NB some people may not have any letter information available.
            </li>
            <li>
              <strong>TIMELINE OF LETTERS</strong> shows time series of the letters sent or recieved by the actor.
              Howering or clicking on the bullets 'Sent', 'Received', or 'All' allows to hide/show e.g. only the sent or received letters.
              The letters that are known to be sent during multiple years are spread evenly along that period.
            </li>
            <li>
              <strong>TOP CORRESPONDENCES</strong> show a time series of the actor's correspondences with 10 ten other people.
              Howering or clicking on the bullets 'to', 'from', 'Sent', 'Received', or 'All' allows to focus e.g. on only the sent or received letters.
              The letters that are known to be sent during multiple years are spread evenly along that period.
            </li>
            <li>
              <strong>NETWORK OF LETTERS</strong> shows this actors's relations to other actors connected by the correspondences. The network shown a maximum of 60 neighbors nodes within a distance of 3 degress from the network ego.
            </li>
            <li>
              <strong>SOCIAL SIGNATURES</strong> view has a chart showing how much the actor has been in correspondence with the most, the second most, etc, important other actor during the different periods along the total time of activity. In connections both sent and recieved letters are taken into account.
            </li>
            <li>
              <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
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
  statistics: `
  <h1 class=\"MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom\">Data Overview</h1>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"><i>The data analysis on this page is based on data from <strong>2025-05-18</strong>.<br />Some numbers may differ from the portal if the data has been updated after this date.</i></p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">The League of Nations contains metadata for over 1 million letters and 100000 actors. The data is collected from multiple data sources belonging to different cultural heritage organizations. Although the data is harmonized between different data sources, the completeness and accuracy of the data varies as this brief overview of the data demonstrates. The quality of the letter metadata depends on the availability of the information in the original letters or biographies, how the letters are digitized and linked data transformation.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">The table below shows the number of letters and actors in each data source. The five largest data sources contribute to over 97% of the letters in the League of Nations Finland data. Actors can have type Person, Family or Organization. Most of the actors are letter senders and receivers. Some actors have also had the role of \"Records creator\", and in the case of Albert Edelfelt Letters and J. V. Snellman Letters actors mentioned in the letters have a \"Referenced in letter content\" role which explains the relatively high number of actors compared to the number of letters.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">The figure below shows the proportion of letters in each data source that have information about date, language, sending and receiving place. Almost all letters have some estimate about the time of sending but the exact sending date is rarely known. Availability to the language of the letter differs from source to source. The place of sending is known better in the smaller data sources, and the place of receiving the letter is usually not known. The sending places vary from residence of the sender to country, but is usually a village, town or city.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">The data has estimated sending years of the letters available, but the original descriptions of the sending dates vary a lot in terms of accuracy and formats and have to be extracted using e.g. regular expressions. The sending date is rarely completely missing. The sending date descriptions that do not fit other categories or are uncertain are included in the type \"OTHER\". The five largest data sources have mostly a year or a range of years assigned to the sending date. In the smaller data sources, the exact sending date is usually known with some exceptions.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">Each letter is assigned only to one data source. Because the information about the sending dates and places are lacking, it is difficult to say if there are possible duplicate letters between the data sources. There is possibly one shared letter between Albert Edelfelt Letters and Finnish National Gallery, and 18 between Elias Lönnrot Letters and J.V. Snellman Letters, where the sender and the receiver of the letter, and the sending date and place match.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">Actors on the other hand can be present in multiple data sources, and the information about them is combined to the League of Nations Finland data using also external data sources like AcademySampo, BiographySampo and Wikidata. The number of possible actor duplicates depends on how well linking actors to themselves across data sources has succeeded. In many cases, there was not enough information to say with confidence if two actors in different sources are actually the same person. Actors who have more letters in the data appear more likely in multiple data sources.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">In the figure below, each row shows the percentage of Person type actors who have sent and/or received  at least a certain amount of letters and have the metadata corresponding to the column available. The gender is usually known, but as the number of letters grows actors are more likely to have links to external sources and more detailed metadata.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">In general, data sources have a quite big proportion of the actors unique to the source. For the Finnish National Gallery and larger data sources, over 70% of the actors are unique. There are a lot of actors who are associated with one or two letters and appear only in one source, whereas people who are associated with many letters are more likely shared between data sources. Especially letters the actor has sent might have ended up in different data sources. Figure below shows how actors are shared between data sources.</p>
  `,
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
