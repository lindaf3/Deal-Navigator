const { RESTDataSource } = require('apollo-datasource-rest');

class CheapSharkAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.cheapshark.com/api/1.0/';
  }
   buildQueryParameters(parameters){
    const ans = {};
    for(let i = 0; i < parameters.length; ++i){
      if(parameters[i][1]){
        ans[parameters[i][0]] = parameters[i][1];
      }
    }
    return ans;
  }
  async lookupDeals( storeID, pageNumber, pageSize, sortBy, desc, lowerPrice, upperPrice, metacritic, steamRating, steamAppID, 
    title, exact, AAA, steamworks, onSale, output ) {
      const parameters = [ [ "storeID", storeID ], [ "pageNumber", pageNumber ], [ "pageSize", pageSize ], [ "sortBy", sortBy ], [ "desc", desc ], 
        [ "lowerPrice", lowerPrice ], [ "upperPrice", upperPrice ],[ "metacritic", metacritic ], [ "steamRating", steamRating ], [ "steamAppID", steamAppID ],
        [ "title", title ], [ "exact", exact ], [ "AAA", AAA ], [ "steamworks", steamworks ], [ "onSale", onSale ], [ "output", output ]];
      return await this.get( 'deals', this.buildQueryParameters(parameters) );
  }
  async lookupDeal( id ) {
      return await this.get( 'deals', { id: id } );
  }
  async lookupGames( title, steamAppID, limit, exact ){
      const parameters = [ [ "title", title ], ["steamAppID", steamAppID], [ "limit", limit ], [ "exact", exact ] ];
      return await this.get( 'games', this.buildQueryParameters(parameters) );
  }
  async lookupGame( id ) {;
      return await this.get( 'games', { id: id } );
  }
  async lookupMultipleGames( ids ) {
      return await this.get( 'games', { ids: ids } );
  }
  async lookupStores(){
      return this.get( 'stores' );
  }
}

module.exports = CheapSharkAPI;
