import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// 解决 ElementUI导航栏中的 vue-router在 3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [

    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/main',
        name: 'Main',
        component: () =>
            import ('../views/Main.vue'),
        children: [

            {
                path: '/homepage',
                name: 'Homepage',
                component: () =>
                    import ('../views/Mainviews/Homepage.vue')
            },
            {
                path: '/shopcart',
                name: 'Shopcart',
                component: () =>
                    import ('../views/Mainviews/Shopcart.vue')
            },
            {
                path: '/order',
                name: 'Order',
                component: () =>
                    import ('../views/Mainviews/Order.vue')
            },
            {
                path: '/mypage',
                name: 'Mypage',
                component: () =>
                    import ('../views/Mainviews/Mypage.vue')
            },

        ]
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () =>
            import ('../views/Detail.vue')
    },
    {
        path: '/editAddress/:isPay?/:sids?/:aid?',
        name: 'EditAddress',
        component: () =>
            import ('../views/EditAddress.vue')
    },
    {
        path: '/myAddress/:choose?/:sids?:aid?/',
        name: 'MyAddress',
        component: () =>
            import ('../views/MyAddress.vue')
    },
    {
        path: '/forget',
        name: 'Forget',
        component: () =>
            import ('../views/Forget.vue')
    },
    {
        // params传参好像会顺序？
        path: '/pay/:sids?/:aid?',
        name: 'Pay',
        component: () =>
            import ('../views/Pay.vue')
    },
    {
        path: '/useManage',
        name: 'UseManage',
        component: () =>
            import ('../views/UseManage.vue')
    },
    {
        path: '/collection',
        name: 'Collection',
        component: () =>
            import ('../views/Collection.vue')
    },
    {
        path: '/safeCenter',
        name: 'SafeCenter',
        component: () =>
            import ('../views/SafeCenter.vue')
    },
    {
        path: '*',
        redirect: {
            name: 'Homepage'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router