const { gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar JSON,
  type DealType {
    internalName: String,
    title: String,
    metacriticLink: String,
    dealID: String,
    storeID: String,
    gameID: String,
    salePrice: String,
    normalPrice: String,
    isOnSale: String,
    savings: String,
    metacriticScore: String,
    steamRatingText: String,
    steamRatingPercent: String,
    steamRatingCount: String,
    steamAppID: String,
    releaseDate: Int,
    lastChange: Int,
    dealRating: String,
    thumb: String
  },
  type GameInfoType {
    "storeID": "1",
    "gameID": "93503",
    "name": "BioShock Infinite",
    "steamAppID": "8870",
    "salePrice": "7.49",
    "retailPrice": "29.99",
    "steamRatingText": "Overwhelmingly Positive",
    "steamRatingPercent": "95",
    "steamRatingCount": "52167",
    "metacriticScore": "94",
    "metacriticLink": "/game/pc/bioshock-infinite",
    "releaseDate": 1364169600,
    "publisher": "2K Games",
    "steamworks": "1",
    "thumb": "https://steamcdn-a.akamaihd.net/steam/apps/8870/capsule_sm_120.jpg?t=1534538071"
  },
  type CheaperStoreType {
    "dealID": "vb3EqB4KpKbSyV83DXQYAZCSBS60LaOMgLCXSt8pQxw%3D",
    "storeID": "23",
    "salePrice": "5.46",
    "retailPrice": "29.99"
  },
  type CheapestPriceType {
    "price": "5.90",
    "date": 1528368365
  },
  type SpecificDealType {
    gameInfo: GameInfoType,
    cheaperStores: [CheaperStoreType],
    cheapestPrice: CheapestPriceType,
  },
  type GameType {
    "gameID": "146",
    "steamAppID": "35140",
    "cheapest": "14.95",
    "cheapestDealID": "LNCZ5EicmEMiwyfYVw%2FNdGPos9V7MzoPId2UuwaBqvA%3D",
    "external": "Batman: Arkham Asylum Game of the Year Edition",
    "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAREDITION",
    "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/35140/capsule_sm_120.jpg?t=1569358035"
  },
  type SpecificGameType {
    "info": {
      "title": "LEGO Batman",
      "steamAppID": "21000",
      "thumb": "https://originassets.akamaized.net/origin-com-store-final-assets-prod/195763/142.0x200.0/1040463_MB_142x200_en_US_^_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg"
  },
  "cheapestPriceEver": {
      "price": "3.99",
      "date": 1543028665
  },
  "deals": [
      {
          "storeID": "23",
          "dealID": "tyTH88J0PXRvYALBjV3cNHd5Juq1qKcu4tG4lBiUCt4%3D",
          "price": "14.95",
          "retailPrice": "19.99",
          "savings": "25.212606"
      },
      {
          "storeID": "15",
          "dealID": "0f%2B4gT2VVUn4UcmFzPxXnuqoXKAOYoJ5mpFZRWNyohc%3D",
          "price": "16.36",
          "retailPrice": "19.99",
          "savings": "18.159080"
      },
      {
          "storeID": "28",
          "dealID": "atibivJQyXsOousolMoHm2iwPKyZaYMxbJ0sR0030M4%3D",
          "price": "16.99",
          "retailPrice": "19.99",
          "savings": "15.007504"
      },
      {
          "storeID": "21",
          "dealID": "Dtzv5PHBf71720cIYjxx3oHvvZK3iHUbQjv6fWLVpd8%3D",
          "price": "19.99",
          "retailPrice": "19.99",
          "savings": "0.000000"
      },
      {
          "storeID": "8",
          "dealID": "S8sC6rS2qZS5e0tROfV8hBgYeJPbG1T61BNmcz5Z%2BwE%3D",
          "price": "19.99",
          "retailPrice": "19.99",
          "savings": "0.000000"
      },
      {
          "storeID": "29",
          "dealID": "%2B7VX8im%2FkdTZIoOpHzeQ0X3roxf655hXC6oq6iruQCM%3D",
          "price": "19.99",
          "retailPrice": "19.99",
          "savings": "0.000000"
      }
  ]
  },
  type StoreType {
    "storeID": "1",
    "storeName": "Steam",
    "isActive": 1,
    "images": {
        "banner": "/img/stores/banners/0.png",
        "logo": "/img/stores/logos/0.png",
        "icon": "/img/stores/icons/0.png"
    }
  }

  type Query {
    getDealLink(id: String!): String,
    getDeals(): [DealType],
    getSpecificDeal(): SpecificDealType,
    getGames(): [GameType],
    getSpecificGame(): SpecificGameType,
    getMultipleGames(): JSON,
    getStores(): StoreType
  }
`
