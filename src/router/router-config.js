/**
 * Created by wangluyuan on 16/10/10.
 */

const config = [{
    path: '/',
    children: [
        {
            path: '/hallo',
            component: require('common/components/hallo')
        }
    ],
    component: require('common/components/app')
}]

module.exports = config