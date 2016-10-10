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
    module: {
        loaders: loaders
    }
}