const { ApolloServer } = ('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const CheapSharkAPI = require('./datasources/CheapSharkAPI');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        cheapSharkAPI: new CheapSharkAPI(),
      };
    },
  });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})