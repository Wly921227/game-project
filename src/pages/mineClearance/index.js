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
                    return <Block key={i} state={item} open={this.setOpenItem.bind(this)}/>
                })}
            </li>
        })
    }

    onSelectLevel(event) {
        let appState = new AppState(parseInt(event.target.value))
        this.setState({appState: appState})
    }

    onRestart() {
        this.state.appState.init()
    }

    setOpenItem(point) {
        this.state.appState.openItem = point
    }

    render() {
        let {
            appState
        } = this.state

        return <div className="mine-clear">
            <div className="select-level">
                <label className="label">难度:</label>
                <select className="select" name="level" onChange={this.onSelectLevel.bind(this)}>
                    <option value="1">初级</option>
                    <option value="2">中级</option>
                    <option value="3">高级</option>
                </select>
                <button className="btn" onClick={this.onRestart.bind(this)}>重新开始</button>
            </div>
            <ul>
                {this.getBlockList(appState.list)}
            </ul>
        </div>
    }
}

module.exports = MineClear