/**
 * Created by wangluyuan on 16/10/10.
 */

var path = require('path')

module.exports = [
    // JS
    {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
    },
    // less
    {
        test: /\.less?$/,
        exclude: /(node_modules)/,
        loader: 'style!css!less!autoprefixer?browsers=last 2 version&remove=false'
    },
    // css
    {
        test: /\.css?$/,
        exclude: /(node_modules)/,
        loader: 'style!css!autoprefixer?browsers=last 2 version&remove=false'
    },
    // images
    {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=1000000'   // 单位b
    }
]