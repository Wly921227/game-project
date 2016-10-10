/**
 * Created by wangluyuan on 16/10/10.
 */

import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router'

let config = require('./router-config')

let hallo = require('common/components/hallo')
let app = require('common/components/app')

class Routers extends Component {
    render() {
        // let routes = config.map((value) => {
        //     let app = React.createClass({
        //         render() {
        //             return value.component
        //         }
        //     })
        //     return <Route path={value.path} component={app}/>
        // })

        return <Router history={hashHistory}>
            <Route path="/" component={app}>

            </Route>
            <Route component={app}>
                <Route path="*" component={hallo}/>
            </Route>
        </Router>
    }
}

module.exports = Routers