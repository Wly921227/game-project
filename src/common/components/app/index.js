/**
 * Created by wangluyuan on 16/10/9.
 */

import React, {Component} from 'react'

require('./style.less')

class App extends Component {
    render() {
        let self = this

        return <div className="app-component bg1">
            <div className="body">
                <div className="main">
                    {self.props.children}
                </div>
            </div>
        </div>
    }
}

module.exports = App