import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'debug',
    publicPath,
    silent: true,
    stats: {
      colors: true,
    },
  });
}

export function generateWebpackMiddleware(webpackConfig) {
  const compiler = webpack(webpackConfig);
  const devMiddleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  const hotMiddleware = webpackHotMiddleware(compiler);

  return { compiler, devMiddleware, hotMiddleware };
}

export function attachWebpack(app, { compiler, devMiddleware, hotMiddleware }) {
  app.use(devMiddleware);
  app.use(hotMiddleware);

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = devMiddleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
}
