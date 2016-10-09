/**
 * Created by wangluyuan on 16/10/9.
 */

// var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('../conf')
var express = require('express')
var port = config.dev.port
var path = 'http://localhost:' + port + '/'
config.dev.webpackConfig.entry.app
    .unshift('webpack-dev-server/client?' + path,
    'webpack/hot/dev-server')

config.dev.webpackConfig.output.publicPath = path

var compiler = webpack(config.dev.webpackConfig)

var server = new WebpackDevServer(compiler, {
    noInfo: false,
    stats: {
        chunks: false,
        hash: false,
        colors: { level: 2, hasBasic: true, has256: true, has16m: false }
    },
    quiet: false,
    publicPath: '/static/',
    inline:true,
    progress:true,
    hot: true,
    historyApiFallback: true
})
server.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at http://localhost:' + port);
})