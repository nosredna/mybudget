import bodyParser from 'body-parser';
import morgan from 'morgan';
import errorhandler from 'errorhandler';
import helmet from 'helmet';
import cors from 'cors';

const setGlobalMiddleware = app => {
  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
  } else {
    app.use(helmet());
    app.use(cors());
  }

  // common
  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};

export default setGlobalMiddleware;
