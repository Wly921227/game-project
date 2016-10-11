/**
 * Created by wangluyuan on 16/10/9.
 */

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpackBase = require('./webpack.base.config')
var port = 8080
var httpPath = 'http://localhost:' + port + '/'
var config = Object.assign(webpackBase, {
    devtool: 'source-map'
})

Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    config.entry[name] = []
    //添加HMR文件
        .concat('webpack-dev-server/client?' + httpPath)
        .concat('webpack/hot/dev-server')
        .concat(webpackBase.entry[name])
})

// 输出目录
config.output = {
    path: path.resolve(__dirname, '../static/'),
    publicPath: httpPath,
    filename: '[name].bundle.js'
}

// webpack-dev-server
config.devServer = {
    inline: true
}

// 插件
config.plugins = (webpackBase.plugins || []).concat(
    new webpack.DefinePlugin({
        'process.env.NODE.ENV': 'development'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './template/index.dev.html'),
        inject: true
    })
)

module.exports = {
    config,
    port
}