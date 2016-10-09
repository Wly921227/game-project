/**
 * Created by wangluyuan on 16/10/9.
 */

var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, '../src/app.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../static/'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        })
    ],
    module: {
        loaders: [
            // JSX
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            // less
            {
                test: /\.less?$/,
                exclude: /(node_modules)/,
                loader: 'style!css!less'
            },
            // css
            {
                test: /\.css?$/,
                exclude: /(node_modules)/,
                loader: 'style!css'
            }
        ]
    }
}