import express from 'express';
import setupMiddleware from './middlewares/globalMiddleware';
import setupApi from './middlewares/api';
import { graphQLRouter } from './api';
import { connect } from './db';
import { protect } from './api/modules/auth';
import logger from './logger';

const app = express();
setupMiddleware(app);
setupApi(app);

// database
connect().catch(err => {
  logger.error(err);
});

app.use(protect);
graphQLRouter.applyMiddleware({ app, path: '/graphql' });

export default app;
