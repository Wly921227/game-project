/**
 * Created by wangluyuan on 16/10/11.
 */

const {observable} = require('mobx')

class State {
    @observable input = ''

    constructor() {}
}

module.exports = State