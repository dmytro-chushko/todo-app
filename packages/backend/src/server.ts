import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import axios from 'axios';
import cors from 'cors';
import passport from 'passport';
import AppRouter from './routes';
import connectDB from './config/database';
import { jwtStrategy } from './strategies/jwt.strategy';
import { errorHandler } from './middlewares/error-handler.middleware';

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

app.use(passport.initialize());
passport.use(jwtStrategy);
// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

app.use(errorHandler);

// TODO: Move that to model GraphQL
const schema = buildSchema(`
  type Query {
    todos: String
  }
`);

// TODO: Create graphQL controller
const rootValue = {
  todos: async () => {
    // TODO: Create http service for that
    const todos = await axios.get('http://localhost:5000/api/todos');
    return todos.data;
  }
};

// TODO: Move that to router init function ONLY AFTER MAIN PART OF APP
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
