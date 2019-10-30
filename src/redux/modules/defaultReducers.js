const cities = {
    cityList: [
        {
            "id": 785842,
            "name": "Skopje",
            "country": "MK",
            "coord": {
                "lon": 21.433331,
                "lat": 42
            },
            "label": "Skopje - MK"
        },
        {
            "id": 792680,
            "name": "Belgrade",
            "country": "RS",
            "coord": {
                "lon": 20.46513,
                "lat": 44.804008
            },
            "label": "Belgrade - RS"
        },
        {
            "id": 264371,
            "name": "Athens",
            "country": "GR",
            "coord": {
                "lon": 23.716221,
                "lat": 37.97945
            },
            "label": "Athens - GR"
        },
        {
            "id": 3186886,
            "name": "Zagreb",
            "country": "HR",
            "coord": {
                "lon": 15.97798,
                "lat": 45.814442
            },
            "label": "Zagreb - HR"
        },
        {
            "id": 293397,
            "name": "Tel Aviv",
            "country": "IL",
            "coord": {
                "lon": 34.780571,
                "lat": 32.080879
            },
            "label": "Tel Aviv - IL"
        },
        {
            "id": 2643743,
            "name": "London",
            "country": "GB",
            "coord": {
                "lon": -0.12574,
                "lat": 51.50853
            },
            "label": "London - GB"
        },
        {
            "id": 6356055,
            "name": "Barcelona",
            "country": "ES",
            "coord": {
                "lon": 2.12804,
                "lat": 41.399422
            },
            "label": "Barcelona - ES"
        },
        {
            "id": 3117735,
            "name": "Madrid",
            "country": "ES",
            "coord": {
                "lon": -3.70256,
                "lat": 40.4165
            },
            "label": "Madrid - ES"
        },
        {
            "id": 2950159,
            "name": "Berlin",
            "country": "DE",
            "coord": {
                "lon": 13.41053,
                "lat": 52.524368
            },
            "label": "Berlin - DE"
        },
        {
            "id": 2925533,
            "name": "Frankfurt am Main",
            "country": "DE",
            "coord": {
                "lon": 8.68333,
                "lat": 50.116669
            },
            "label": "Frankfurt am Main - DE"
        },
        {
            "id": 3173435,
            "name": "Milano",
            "country": "IT",
            "coord": {
                "lon": 9.18951,
                "lat": 45.464272
            },
            "label": "Milano - IT"
        },
        {
            "id": 3169070,
            "name": "Roma",
            "country": "IT",
            "coord": {
                "lon": 12.4839,
                "lat": 41.894741
            },
            "label": "Roma - IT"
        },
        {
            "id": 3196359,
            "name": "Ljubljana",
            "country": "SI",
            "coord": {
                "lon": 14.50513,
                "lat": 46.051079
            },
            "label": "Ljubljana - SI"
        },
        {
            "id": 745044,
            "name": "Istanbul",
            "country": "TR",
            "coord": {
                "lon": 28.949659,
                "lat": 41.01384
            },
            "label": "Istanbul - TR"
        },
        {
            "id": 5368361,
            "name": "Los Angeles",
            "country": "US",
            "coord": {
                "lon": -118.243683,
                "lat": 34.052231
            },
            "label": "Los Angeles - US"
        },
        {
            "id": 2174003,
            "name": "Brisbane",
            "country": "AU",
            "coord": {
                "lon": 153.028091,
                "lat": -27.467939
            },
            "label": "Brisbane - AU"
        },
        {
            "id": 2165798,
            "name": "Geelong",
            "country": "AU",
            "coord": {
                "lon": 144.360687,
                "lat": -38.14711
            },
            "label": "Geelong - AU"
        },
        {
            "id": 2147714,
            "name": "Sydney",
            "country": "AU",
            "coord": {
                "lon": 151.207321,
                "lat": -33.867851
            },
            "label": "Sydney - AU"
        },
        {
            "id": 2063523,
            "name": "Perth",
            "country": "AU",
            "coord": {
                "lon": 115.833328,
                "lat": -31.933331
            },
            "label": "Perth - AU"
        },
        {
            "id": 7839805,
            "name": "Melbourne",
            "country": "AU",
            "coord": {
                "lon": 144.944214,
                "lat": -37.813061
            },
            "label": "Melbourne - AU"
        },
        {
            "id": 524901,
            "name": "Moscow",
            "country": "RU",
            "coord": {
                "lon": 37.615555,
                "lat": 55.75222
            },
            "label": "Moscow - RU"
        },
        {
            "id": 4164138,
            "name": "Miami",
            "country": "US",
            "coord": {
                "lon": -80.193657,
                "lat": 25.774269
            },
            "label": "Miami - US"
        }
    ]

}

const forecastSearch = {
    currentForecast: {},
    history: [],
    searchHistoryEntry: {}
}

export const defaultReducers = {
    cities,
    forecastSearch
}