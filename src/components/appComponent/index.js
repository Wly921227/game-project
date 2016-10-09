/**
 * Created by wangluyuan on 16/10/9.
 */

// import React, {Component} from 'react'

require('./style.less')

var React = require('react')
var {Component} = require('react')

class AppComponent extends Component {
    render() {
        return <div className="app-component">
            hallo word!
            <br/>
            test hot loading
        </div>
    }
}

module.exports = AppComponent