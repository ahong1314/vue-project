import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '*',
        redirect: '/home',
        meta:{ explain: true }
    },
    {
        name: 'home',
        component: () => import('./view/home'),
        meta: {
            title: '首页', explain: true
        }
    },
    {
        name: 'order',
        component: () => import('./view/order'),
        meta: {
            title: '订单'
        }
    },
    {
        name: 'map',
        component: () => import('./view/map'),
        meta: {
            title: '位置'
        }
    },
    {
        name: 'user',
        component: () => import('./view/user'),
        meta: {
            title: '会员中心', keepAlive: true
        }
    },
    {
        name: 'cart',
        component: () => import('./view/cart'),
        meta: {
            title: '购物车'
        }
    },
    {
        name: 'goods',
        component: () => import('./view/goods'),
        meta: {
            title: '商品详情', explain: true , expNav: true
        }
    },
    {
        name: 'confirm',
        component: () => import('./view/confirm'),
        meta: {
            title: '确认订单', explain: true , expNav: true
        }
    }
]
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
  });
export default new Router({
    base: process.env.BASE_URL,
    routes: routes
})
