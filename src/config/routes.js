import App from '../App'
import Home from '../pages/Home.vue'
import Main from '../pages/main/index.vue'
import Xfaxq from '../pages/xfaxq/index.vue'
import Qfxxq from '../pages/qfxxq/index.vue'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [{
        path: '/',
        component: Home,
        redirect: '/main',
        children: [{
                path: '/main',
                component: resolve => require(['../pages/main/'], resolve),
                name: '首页'
            },
            {
                path: '/xfa',
                component: resolve => require(['../pages/xfa/'], resolve),
                name: '选方案',
            },
            {
                path: '/qfx',
                component: resolve => require(['../pages/qfx/'], resolve),
                name: '趣发现',
            },
        ]
    },
    {
        path: '/',
        component: Home,
        children: [{
            path: '/xfaxq/:id',
            component: Xfaxq,
        }, ]
    },
    {
        path: '/',
        component: Home,
        children: [{
            path: '/qfxxq/:id',
            component: Qfxxq,
        }, ]
    }




]