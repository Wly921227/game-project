/**
 * Created by wangluyuan on 16/10/10.
 */

var path = require('path')

module.exports = [
    // js
    {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
            plugins: [
                'transform-decorators-legacy',
                'react-hot-loader/babel'
            ],   /// 使用decorator写法
            presets: [
                'es2015',
                'stage-2',
                'react'
            ]
        }
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
        loader: 'style!css'
    },
    // images
    {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=1000000'   // 单位b
    },
    // json
    {
        test: /\.json?$/,
        loader: 'json'
    },
    // file
    {
        test: /\.md?$/,
        loader: 'html'
    }
]