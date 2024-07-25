const express = require('express');
const path = require('path');

const routes = require('./routes');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4')
const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});




const { start } = require('repl');
const { authMiddleware } = require('./utils/auth');



const app = express();




// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

// app.use(routes);
const startApolloServer = async () => {
  try {
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Correctly apply the Apollo Server middleware to the Express app
    app.use('/graphql', expressMiddleware(server, {
      context: authMiddleware // Adjust according to your authMiddleware function
    }));

    db.once('open', () => {
      app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
    });
  } catch (error) {
    console.error("Failed to start the Apollo Server:", error);
  }
};

startApolloServer();

