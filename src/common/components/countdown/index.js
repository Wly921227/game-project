/**
 * Created by wangluyuan on 16/10/11.
 */

var React = require('react')
let {observer} = require('mobx-react')
let AppState = require('./state')

@observer
class CountDown extends React.Component {

    componentWillMount() {
        const appState = new AppState()
        this.setState({appState: appState})
    }

    render() {
        let self = this

        let {
            time,
            num
        } = self.state.appState

        let clickResetTime = () => {
            self.state.appState.resetTime()
        }

        let setNum = (event) => {
            self.state.appState.setNum(event.target.value)
        }

        return <div>
            <div>
                <input className="input" type="text" value={num} onChange={setNum}/>
                <button className="btn btn-default" onClick={clickResetTime}>重置</button>
            </div>
            <div>
                <label className="label label-default">
                    剩余时间: <span className={time <= 10 ? 'warning' : 'success'}>{time}</span>
                </label>
            </div>
        </div>
    }
}

module.exports = CountDown