import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
    {
        name: 'login',
        component: () => import('./view/login'),
        meta: {
            title: '登录'
        }
    },
    // {
    //     name: 'user',
    //     component: () => import('./view/user'),
    //     meta: {
    //         title: '会员中心', keepAlive: true
    //     }
    // },
    // {
    //     name: 'cart',
    //     component: () => import('./view/cart'),
    //     meta: {
    //         title: '购物车'
    //     }
    // },
    // {
    //     name: 'goods',
    //     component: () => import('./view/goods'),
    //     meta: {
    //         title: '商品详情'
    //     }
    // },
    // {
    //     name: 'bet',
    //     component: () => import('./view/bet'),
    //     meta: {
    //         title: '商品详情'
    //     }
    // }
]
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
  });
export default new Router({
    base: process.env.BASE_URL,
    routes: routes
})
