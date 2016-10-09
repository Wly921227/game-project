/**
 * Created by wangluyuan on 16/10/9.
 */

var baseConfig = require('./webpack.base.config')

module.exports = {
    dev: {
        webpackConfig: Object.assign(baseConfig, require('./webpack.dev.config')),
        port: 8080
    }
}