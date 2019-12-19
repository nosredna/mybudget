import http from 'http';
import app from './server';
import argv from './argv';
import port from './port';
import logger from './logger';
import webpackConfig from '../internals/webpack/webpack.dev.babel';
import {
  generateWebpackMiddleware,
  attachWebpack,
} from './middlewares/addDevMiddlewares';

function applyWebpackMiddleware(newApp, middleware) {
  attachWebpack(newApp, middleware);

  // use the gzipped bundle
  newApp.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz'; // eslint-disable-line
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;

const server = http.createServer(app);
let currentApp = app;

const webpackMiddleware = generateWebpackMiddleware(webpackConfig);
applyWebpackMiddleware(app, webpackMiddleware);

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

server.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    return logger.appStarted(port, prettyHost, url);
  }
  return logger.appStarted(port, prettyHost);
});

if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp);
    applyWebpackMiddleware(app, webpackMiddleware);
    server.on('request', app);
    currentApp = app;
  });
}
