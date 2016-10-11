/**
 * Created by wangluyuan on 16/10/11.
 */

const {observable} = require('mobx')

class State {
    @observable input = ''

    constructor() {
        setInterval(() => {
            console.log(this.input)
        }, 1000)
    }

    set input(value) {
        this.input = value
    }
    get input() {
        return this.input
    }

}

module.exports = State