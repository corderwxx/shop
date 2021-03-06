import Vue from 'vue';

import Router from 'vue-router';
const Login = () =>
    import ('../views/Login');
const Home = () =>
    import ('../views/Home')
Vue.use(Router);

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
]
const router = new Router({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.path == '/login') return next();
    // 获取token存取在浏览器里面的值
    const token = window.sessionStorage.getItem('token');
    if (!token) return next('/login');
    next();
})

export default router;