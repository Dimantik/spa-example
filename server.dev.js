const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require( 'webpack-hot-middleware');

const app = express();
const port = require('./config.js').dev_port;
const wpConfig = require('./webpack.config.dev.js');
const compiler = webpack(wpConfig);

const apiRouter = require('./lib/route/api.router');
const dbUtils = require('./lib/utils/db.utils');

dbUtils.setUpConnection();

app.use(webpackDevMiddleware(compiler, {
    publicPath: wpConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.use('/api', apiRouter);


app.listen(port, function () {
    console.log('Example app listening on port ' + port + '\n');
});