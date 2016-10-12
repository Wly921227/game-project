/**
 * Created by wangluyuan on 16/10/12.
 */

require('./style')

const React = require('react')
const {observer} = require('mobx-react')
const AppState = require('./state')

let Block = require('./components/block')

@observer
class MineClear extends React.Component {

    componentWillMount() {
        let appState = new AppState()
        this.setState({appState: appState})
    }

    getBlockList(list) {
        return list.map((value, key) => {
            return <li key={key}>
                {value.map((item, i) => {
                    return <Block key={i} state={item}/>
                })}
            </li>
        })
    }

    render() {
        let {
            appState
        } = this.state

        return <div className="mine-clear">
            <ul>
                {this.getBlockList(appState.list)}
            </ul>
        </div>
    }
}

module.exports = MineClear