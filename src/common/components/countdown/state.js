/**
 * Created by wangluyuan on 16/10/11.
 */

import {observable} from 'mobx'

class State {
    @observable time = 100
    @observable num = 0

    constructor() {
        this.interval = setInterval(() => {
            this.countdown()
        }, 1000)
    }

    countdown() {
        this.time -= 1
        if (this.time <= 0) {
            clearInterval(this.interval)
        }
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
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.countdown()
        }, 1000)
    }
}

module.exports = State