/**
 * Created by wangluyuan on 16/10/10.
 */

import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router'

let config = require('./router-config')

class Routers extends Component {

    render() {
        let getRoute = (conf) => {
            return conf.map((value, key) => {
                let children
                if (value.children) {
                    children = getRoute(value.children)
                }
                return <Route key={key} path={value.path} component={value.component}>
                    {children}
                </Route>
            })
        }

        let getError = (conf) => {
            let children
            if (conf.children) {
                children = getError(conf.children)
            }
            return <Route key="onerror" path={conf.path} component={conf.component}>
                {children}
            </Route>
        }

        let routes = getRoute(config.routes)
        let onError = getError(config.onError)

        routes.push(onError)

        return <Router history={hashHistory}>
            {routes}
        </Router>
    }
}

module.exports = Routers