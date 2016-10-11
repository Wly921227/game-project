/**
 * Created by wangluyuan on 16/10/9.
 */

require('common/style.less')

var React = require('react')
var ReactDOM = require('react-dom')
let Routers = require('./router')

ReactDOM.render(
    <Routers/>,
    document.getElementById('main')
)