
const resolvers = {
    Query: {
        getDealLink: async (_, { id }, { }) => {
            return `https://www.cheapshark.com/redirect?dealID=${id}`;
        },
        getDeals: async (_, { storeID, pageNumber, pageSize, sortBy, desc, lowerPrice, upperPrice, metacritic, steamRating, steamAppID, 
            title, exact, AAA, steamworks, onSale, output }, { dataSources } ) => {
            return dataSources.cheapSharkAPI.lookupDeals( storeID, pageNumber, pageSize, sortBy, desc, lowerPrice, upperPrice, metacritic, steamRating, steamAppID, 
                title, exact, AAA, steamworks, onSale, output );
        },
        getSpecificDeal: async (_, { id }, { dataSources } ) => {
            return dataSources.cheapSharkAPI.lookupDeal( id );
        },
        getGames: async (_, { title, steamAppID, limit, exact }, { dataSources } ) => {
            return dataSources.cheapSharkAPI.lookupGames( title, steamAppID, limit, exact );
        },
        getSpecificGame: async (_, { id }, { dataSources } ) => {
            return dataSources.cheapSharkAPI.lookupGame( id );
        },
        getMultipleGames: async (_, { ids }, { dataSources } ) => {
            return dataSources.cheapSharkAPI.lookupMultipleGames( ids );
        },
        getStores: async (_, { }, { dataSources } ) => {
            return dataSources.cheapSharkAPI.lookupStores();
        }
    },
  };

  module.exports = resolvers;
