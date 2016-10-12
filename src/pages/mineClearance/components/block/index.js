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

    clickBlock(state) {
        state.open = true
    }

    render() {

        let {
            state
        } = this.props

        return <div className="block-item" onClick={this.clickBlock.bind(this, state)}>
            {
                state.open ?
                    this.getBlockState(state.state)
                    : <div className="close"></div>
            }
        </div>
    }
}

module.exports = Block