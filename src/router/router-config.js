/**
 * Created by wangluyuan on 16/10/10.
 */

const config = {
    routes: [
        {
            path: '/',
            component: require('common/components/app'),
            children: [
                {
                    path: 'hallo',
                    component: require('common/components/hallo')
                }
            ]
        }
    ],
    onError: {
        path: '',
        component: require('common/components/app'),
        children: {
            path: '*',
            component: require('common/components/404')
        }
    },
    index: {}
}

module.exports = config