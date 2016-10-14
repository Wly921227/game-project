/**
 * Created by wangluyuan on 16/10/12.
 */

require('./style')

const React = require('react')
const {observer} = require('mobx-react')

@observer
class Block extends React.Component {

    getBlockState(state) {
        if (state === -1) {
            return <div className="mine"></div>
        } else if (state === 0) {
            return <div className="empty"></div>
        } else {
            return <div className={'num-value num' + state}>
                {state}
            </div>
        }
    }

    render() {
        let {
            state,
            open
        } = this.props

        let clickBlock = (event) => {
            event.stopPropagation()
            event.preventDefault()
            console.log(event.button)
            state.open = true
            open(state)
        }

        let clickContextMenu = (event) => {
            event.stopPropagation()
            event.preventDefault()

            console.log('右键')
        }

        return <div className="block-item">
            {
                state.open ?
                    this.getBlockState(state.state)
                    : <div className="close" onClick={clickBlock} onContextMenu={clickContextMenu}></div>
            }
        </div>
    }
}

module.exports = Block