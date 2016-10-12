/**
 * Created by wangluyuan on 16/10/11.
 */

require('./style')
const React = require('react')
const {observer} = require('mobx-react')

const AppState = require('./state')

@observer
class Demo extends React.Component {
    
    componentWillMount() {
        let appState = new AppState()
        this.setState({appState: appState})
    }

    inputValue(event) {
        this.state.appState.input = event.target.value
    }
    
    render() {
        let {
            appState
        } = this.state

        return <div>
            <div>
                <input type="text" className="input"
                       value={appState.input}
                       onInput={this.inputValue.bind(this)}/>
                <div className="label">{appState.input}</div>
            </div>
        </div>
    }
}

module.exports = Demo