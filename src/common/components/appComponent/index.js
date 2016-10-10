/**
 * Created by wangluyuan on 16/10/9.
 */

import React, {Component} from 'react'

require('./style.less')

class AppComponent extends Component {
    render() {
        return <div className="app-component">
            <div className="text">hallo word!</div>
        </div>
    }
}

module.exports = AppComponent