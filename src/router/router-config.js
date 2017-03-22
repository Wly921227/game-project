/**
 * Created by wangluyuan on 16/10/10.
 */

const config = {
    routes: [
        {
            path: '',
            component: require('common/components/app'),
            children: [
                {
                    path: '/hallo',
                    component: require('common/components/hallo')
                },
                {
                    path: '/countdown',
                    component: require('common/components/countdown')
                },
                {
                    path: '/menu',
                    component: require('pages/menu')
                },
                {
                    path: '/mineClearance',
                    component: require('pages/mineClearance')
                }
            ]
        },
        {
            path: '/demo',
            component: require('pages/demo')
        },
        {
            path: '/data',
            component: require('pages/makedata')
        },
        {
            path: '/down',
            component: require('pages/downfile')
        },
        {
            path: '/test',
            component: require('pages/test')
        }
    ],
    onError: {
        path: '',
        component: require('common/components/app'),
        children: {
            path: '*',
            component: require('pages/menu')
        }
    },
    index: {}
}

module.exports = config