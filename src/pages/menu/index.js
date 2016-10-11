/**
 * Created by wangluyuan on 16/10/11.
 */

require('./style')
const React = require('react')
const {Link} = require('react-router')

class Menu extends React.Component {
    render() {
        return <div className="game-menu">
            <ul>
                <li>
                    <div>
                        <Link to="/mineClearance">
                            <button className="btn">扫雷</button>
                        </Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to="/page1">
                            <button className="btn">page1</button>
                        </Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to="/page2">
                            <button className="btn">page2</button>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    }
}

module.exports = Menu