const { RESTDataSource } = require('apollo-datasource-rest');

class CheapSharkAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.cheapshark.com/api/1.0/';
  }
  async lookupDeals( storeID, pageNumber, pageSize, sortBy, desc, lowerPrice, upperPrice, metacritic, steamRating, steamAppID, 
    title, exact, AAA, steamworks, onSale, output ) {
        return await this.get( 'deals', {
            // Query parameters
            storeID: storeID,
            pageNumber: pageNumber,
            pageSize: pageSize,
            sortBy: sortBy,
            desc: desc,
            lowerPrice: lowerPrice,
            upperPrice: upperPrice,
            metacritic: metacritic,
            steamRating: steamRating,
            steamAppID: steamAppID,
            title: title,
            exact: exact,
            AAA: AAA,
            steamworks: steamworks,
            onSale: onSale,
            output: output,
          });

  }
  async lookupDeal( id ) {
      return await this.get( 'deals', { id: id } );
  }
  async lookupGames( title, steamAppID, limit, exact ){
      return await this.get( 'games', {
        // Query parameters
        title: title,
        steamAppID: steamAppID,
        limit: limit,
        exact: exact,
      });
  }
  async lookupGame( id ) {
      return await this.get( 'games', { id: id } );
  }
  async lookupMultipleGames( ids ) {
      return await this.get( 'games', { ids: ids } );
  }
  async lookupStores(){
      return this.get( 'stores', { } );
  }
}

module.exports = CheapSharkAPI;
