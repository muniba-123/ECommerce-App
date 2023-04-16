const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { db } = require("./db");
//Category and product resolvers are added to relate data  i.e one to many relation b/w category and proudct
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    db
  },
});

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
