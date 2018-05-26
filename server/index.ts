
import * as express from 'express';
import * as next from 'next';
import * as bodyParser from 'body-parser';
import { buildSchema } from 'graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const myGraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
`);

const PORT = 3000;

const server = express();

nextApp.prepare().then(() => {
  // bodyParser is needed just for POST.
  server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

  // GraphiQL endpoint
  server.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT);
  console.log(`Ready on http://localhost:${ PORT }`);
});
