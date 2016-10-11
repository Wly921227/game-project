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
    
    render() {
        let {
            appState
        } = this.state

        let inputValue = (event) => {
            appState.input = event.target.value
        }
        
        return <div>
            <div>
                <input type="text" className="input" value={appState.input} onInput={inputValue}/>
            </div>
        </div>
    }
}

module.exports = Demo