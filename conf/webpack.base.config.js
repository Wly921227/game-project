/**
 * Created by wangluyuan on 16/10/9.
 */

var path = require('path')
var loaders = require('./loaders')

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, '../src/app.js')
        ]
    },
    // output: {
    //     path: path.resolve(__dirname, '../dist'),
    //     filename: 'bundle.js'
    // },
    resolve: {
        alias: {
            'common': path.resolve(__dirname, '../src/common'),
            'pages': path.resolve(__dirname, '../src/pages'),
            'images': path.resolve(__dirname, '../src/images')
        },
        extensions: ['', '.js', '.json', '.less', '.css']
    },
    module: {
        loaders: loaders
    },
    plugins: []
}