/**
 * Created by wangluyuan on 16/10/9.
 */

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpackBase = require('./webpack.base.config')
var port = 8079
// var httpPath = 'http://localhost:' + port + '/'

var config = Object.assign(webpackBase, {
    devtool: false  // 控制台代码映射
})

Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    config.entry[name] = []
    //添加HMR文件
        .concat(webpackBase.entry[name])
})

// 输出目录
config.output = {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/',
    filename: '/js/[name].[chunkhash].js',
    chunkFilename: '/js/[id].[chunkhash].js'
    // filename: '[name].bundle.js'
}

// 插件
config.plugins = (webpackBase.plugins || []).concat(
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin('/css/[name].[contenthash].css'),
    // generate dist index.html with correct asset hash for caching.
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './template/index.dev.html'),
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // favicon: __dirname + '/../src/images/favicon.ico',
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest'],
        minChunks: function (module, count) {
            // any required modules inside node_modules are extracted to vendor
            return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                    path.join(__dirname, '../node_modules')
                ) === 0
            )
        }
    })
)

module.exports = {
    config,
    port
}