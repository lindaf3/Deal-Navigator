
const resolvers = {
    Query: {
        getDealLink: async (_, { id }, {}) => {
            return `https://www.cheapshark.com/redirect?dealID=${id}`;
        },
        getDeals: async (_, { storeID, pageNumber, pageSize, sortBy, desc, lowerPrice, upperPrice, metacritic, steamRating, steamAppID, 
            title, exact, AAA, steamworks, onSale, output }, { dataSources } ) => {
            return dataSources.CheapSharkAPI.lookupDeals( storeID, pageNumber, pageSize, sortBy, desc, lowerPrice, upperPrice, metacritic, steamRating, steamAppID, 
                title, exact, AAA, steamworks, onSale, output );
        },
        getSpecificDeal: async (_, { id }, { dataSources } ) => {
            return dataSources.CheapSharkAPI.lookupDeal( id );
        },
        getGames: async (_, { title, steamAppID, limit, exact }, { dataSources } ) => {
            return dataSources.CheapSharkAPI.lookupGames( title, steamAppID, limit, exact );
        },
        getSpecificGame: async (_, { id }, { dataSources } ) => {
            return dataSources.CheapSharkAPI.lookupGame( id );
        },
        getMultipleGames: async (_, { ids }, { dataSources } ) => {
            return dataSources.CheapSharkAPI.lookupMultipleGames( ids );
        },
        getStores: async (_, { }, { dataSources } ) => {
            return dataSources.CheapSharkAPI.lookupStores();
        }
    },
  };

  module.exports = resolvers;
