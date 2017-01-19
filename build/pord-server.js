/**
 * Created by wangluyuan on 16/10/9.
 */

var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var devConfig = require('../conf/webpack.prod.config')

var compiler = webpack(devConfig.config, function (err, stats) {
    // spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})

// var server = new WebpackDevServer(compiler, {
//     stats: {
//         chunks: false,
//         hash: false,
//         colors: true
//     },
//     publicPath: devConfig.config.output.publicPath,
//     inline: true
// })

// server.listen(devConfig.port, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Listening at http://localhost:' + devConfig.port);
// })