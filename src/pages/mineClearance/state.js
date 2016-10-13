/**
 * Created by wangluyuan on 16/10/12.
 */

const {observable, computed, autorun} = require('mobx')

class State {
    @observable list = []
    @observable tagList = []
    @observable openItem = {}
    @observable level:number = 1

    @computed get tagNum() {
        return this.tagList.length
    }

    @computed get options() {
        switch (this.level) {
            case 1:
                return {
                    width: 9,
                    height: 9,
                    mineNum: 10
                }

            case 2:
                return {
                    width: 16,
                    height: 16,
                    mineNum: 40
                }

            case 3:
                return {
                    width: 30,
                    height: 16,
                    mineNum: 99
                }

            default:
                return {
                    width: 9,
                    height: 9,
                    mineNum: 10
                }
        }
    }

    constructor(level) {
        this.level = level || 1
        // 绑定初始化状态监控
        this.init()
        // 绑定打开状态数据监控
        autorun(this.watchOpen.bind(this))
    }

    init() {
        let opt = this.options
        let width = opt.width || 9
        let height = opt.height || 9
        let mineNum = opt.mineNum || 10
        this.openItem = {}
        this.tagList = []
        this.list = []

        // 初始化list
        for (let i = 0; i < height; i++) {
            let list = []
            for (let j = 0; j < width; j++) {
                list[j] = {
                    state: 0,
                    open: false,
                    x: i,
                    y: j
                }
            }
            this.list.push(list)
        }

        // 生成雷位置
        for (let i = 0; i < mineNum;) {
            let y = parseInt(Math.random() * width)
            let x = parseInt(Math.random() * height)
            if (this.list[x][y].state !== -1) {
                this.list[x][y].state = -1
                i++
            }
        }
        // 计算周围数字
        this.calcBlockNum()
    }

    // watchOpen
    watchOpen() {
        this.recursiveSetOpen(this.openItem)
    }

    // 获取一个点周围的坐标
    getAroundPoint(point) {
        let list = []
        let x = point.x
        let y = point.y
        if (x > 0) {    // 上一行
            if (y > 0) {    // 左侧
                list.push(this.list[x - 1][y - 1])
            }
            list.push(this.list[x - 1][y])      // 同列
            if (y < this.list[x - 1].length - 1) {  // 右侧
                list.push(this.list[x - 1][y + 1])
            }
        }
        if (y > 0)  // 同行左侧
            list.push(this.list[x][y - 1])
        if (y < this.list[x].length - 1)    // 同行右侧
            list.push(this.list[x][y + 1])
        if (x < this.list.length - 1) {     // 下一行
            if (y > 0) {    // 左侧
                list.push(this.list[x + 1][y - 1])
            }
            list.push(this.list[x + 1][y])      // 同列
            if (y < this.list[x + 1].length - 1) {  // 右侧
                list.push(this.list[x + 1][y + 1])
            }
        }

        return list
    }

    // 递归修改空白处的打开状态
    recursiveSetOpen(point) {
        if (point.state === 0) {
            let around = this.getAroundPoint(point)
            for (let i = 0; i < around.length; i++) {
                let item = around[i]
                if (item.state === 0) {
                    if (!item.open) {
                        item.open = true
                        this.recursiveSetOpen(item)
                    }
                } else {
                    // 如果不是空白处
                    item.open = true
                }
            }
        }
    }

    // 递归计算每个雷周围个数
    recursiveSetMineNum(point) {
        let around = this.getAroundPoint(point)
        for (let i = 0; i < around.length; i++) {
            this.addNum(around[i])
        }
    }

    // 计算各个位置的数字
    calcBlockNum() {
        for (let i = 0; i < this.list.length; i++) {
            let line = this.list[i]
            for (let j = 0; j < line.length; j++) {
                let item = line[j]
                if (item.state === -1) {
                    this.recursiveSetMineNum(item)
                }
            }
        }
    }

    addNum(point) {
        let x = point.x
        let y = point.y
        if (this.list[x][y].state !== -1) {
            this.list[x][y].state += 1
        }
    }
}

module.exports = State