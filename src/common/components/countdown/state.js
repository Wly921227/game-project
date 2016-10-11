/**
 * Created by wangluyuan on 16/10/11.
 */

import {observable} from 'mobx'

class State {
    @observable time = 100
    @observable num = 0

    constructor() {
        console.log(this)
        let interval = setInterval(() => {
            this.time -= 1
            if (this.time === 0) {
                clearInterval(interval)
            }
        }, 1000)

        console.log(this.num)
    }

    setNum(num) {
        this.num = num
    }

    resetTime() {
        if (this.num) {
            this.time = this.num
        } else {
            this.time = 100
        }
    }
}

module.exports = State