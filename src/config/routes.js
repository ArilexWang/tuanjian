import App from '../App'
import Home from '../pages/Home.vue'
import Main from '../pages/main/index.vue'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    // {
    //     path: '/',
    //     component: App,
    //     children: [
    //         {
    //             path: '/home', //个人主页
    //             component: resolve => require(['../pages/home/'], resolve)
    //         },
    //         {
    //             path: '/login', //登录
    //             meta: { auth: false },
    //             component: resolve => require(['../pages/login/'], resolve)
    //         },
    //         {
    //             path: '/', //首页
    //             meta: { auth: false },
    //             component: resolve => require(['../pages/index/'], resolve)
    //         },
    //         {
    //             path: '*', //其他页面，强制跳转到登录页面
    //             redirect: '/login'
    //         }
    //     ]
    // },
    {
        path:'/',
        component: Home,
        children: [
           { path: '/main', component:  resolve => require(['../pages/main/'], resolve), name: '首页' },
        ]
    }
]