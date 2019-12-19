import merge from 'lodash.merge';

const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  port: 4000,
  secrets: {},
  db: {
    url: 'mongodb://localhost/jams',
  },
};

let envConfig = {};

switch (env) {
  case 'test':
  case 'testing':
    envConfig = import('./testing').then(newImport => {
      envConfig = newImport.config;
    });
    break;
  case 'prod':
  case 'production':
    import('./prod').then(newImport => {
      envConfig = newImport.config;
    });
    break;
  case 'development':
  case 'dev':
  default:
    import('./dev').then(newImport => {
      envConfig = newImport.config;
    });
    break;
}

export default merge(baseConfig, envConfig);
