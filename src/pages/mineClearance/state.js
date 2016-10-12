/**
 * Created by wangluyuan on 16/10/12.
 */

const {observable} = require('mobx')

class State {
    @observable list = []

    constructor() {
        let point = {
            x: 5,
            y: 5
        }
        // TODO 长宽

        // 初始化list
        for (let i = 0; i < point.x; i++) {
            let list = []
            for (let j = 0; j < point.y; j++) {
                list[j] = {state: 0, open: false}
            }
            this.list.push(list)
        }

        // 生成雷位置    // TODO 实际雷的个数
        for (let i = 0; i < 3;) {
            let seed = Math.random() * point.x * point.y
            let x = parseInt(seed / point.x)
            let y = parseInt(seed % point.y)
            if (!this.list[x][y].state) {
                this.list[x][y].state = -1
                i++
            }
        }
        // 计算周围数字
        this.calcBlockNum()
    }

    calcBlockNum() {
        console.log(this.list)
        for (let i = 0; i < this.list.length; i++) {
            let line = this.list[i]
            for (let j = 0; j < line.length; j++) {
                let item = line[j]
                if (item.state === -1) {
                    if (i > 0) {
                        // 计算上行
                        this.calcOtherLine(i - 1, j)
                    }
                    // 计算同行
                    this.calcSameLine(i, j)
                    if (i < this.list.length - 1) {
                        // 计算下行
                        this.calcOtherLine(i + 1, j)
                    }
                }

            }
        }
        console.log(this.list)
    }

    calcOtherLine(x, y) {
        if (y > 0) {
            // 计算左侧
            this.addNum(x, y - 1)
        }
        // 计算同列
        this.addNum(x, y)
        if (y < this.list[x].length - 1) {
            // 计算右侧
            this.addNum(x, y + 1)
        }
    }

    calcSameLine(x, y) {
        if (y > 0) {
            // 计算左侧
            this.addNum(x, y - 1)
        }
        if (y < this.list[x].length - 1) {
            // 计算右侧
            this.addNum(x, y + 1)
        }
    }

    addNum(x, y) {
        if (this.list[x][y].state !== -1) {
            this.list[x][y].state += 1
        }
    }
}

module.exports = State