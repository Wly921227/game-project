/**
 * Created by wangluyuan on 16/10/11.
 */

require('./style')
const React = require('react')
const {observer} = require('mobx-react')

const AppState = require('./state')

@observer
class App extends React.Component {

    componentWillMount() {
        let appState = new AppState()
        this.setState({appState: appState})
    }

    clickTabs(show) {
        this.state.appState.showTab = show
    }
    
    inputSearch(event) {
        this.state.appState.search = event.target.value
    }

    clickClear() {
        this.state.appState.search = ''
    }

    render() {
        let {
            appState
        } = this.state

        let tabs = appState.tabs.map((value, key) => {
            return <li key={key}>
                <div className="label" onClick={this.clickTabs.bind(this, value.id)}>
                    {value.text}
                </div>
            </li>
        })

        let getList = (list) => {
            return list.map((value, key) => {
                return <li key={key} className="question">
                    <div className="label type">类别:{value.type}</div>
                    <div className="label title">题目:{value.title}</div>
                    <div className="label answer">答案:{value.answer}</div>
                    {(value.text ? <div className="text">{value.text.map((item, i) => {
                        return <div className="label" key={i}>{item}</div>
                    })}</div> : null)}
                </li>
            })
        }

        let content = () => {
            switch (appState.showTab) {
                case 0:
                    return <div className="q-list">
                        <ul>
                            {getList(appState.showSingle)}
                        </ul>
                    </div>

                case 1:
                    return <div className="q-list">
                        <ul>
                            {getList(appState.showMore)}
                        </ul>
                    </div>

                case 2:
                    return <div className="q-list">
                        <ul>
                            {getList(appState.showJudge)}
                        </ul>
                    </div>
            }
        }

        return <div>
            <div className="tabs">
                <ul>
                    {tabs}
                </ul>
            </div>
            <div className="content">
                <div className="search">
                    <input type="text" className="input" value={appState.search} onChange={this.inputSearch.bind(this)}/>
                    <button className="btn" onClick={this.clickClear.bind(this)}>清空</button>
                </div>
                {content()}
            </div>
        </div>
    }
}

module.exports = App