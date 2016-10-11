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
            <input type="text" value={num} onChange={setNum}/>
            <button onClick={clickResetTime}>重置</button>
            <div>剩余时间: {time}</div>
        </div>
    }
}

module.exports = CountDown