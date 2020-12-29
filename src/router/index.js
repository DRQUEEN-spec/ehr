/*
 * @Author: your name
 * @Date: 2020-12-29 00:58:04
 * @LastEditTime: 2020-12-29 01:39:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ehr\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/index.vue'
import nav1 from '@/views/home/nav1.vue'
import nav2 from '@/views/home/nav2.vue'

Vue.use(VueRouter)

// 路由配置表
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/nav1',
                name: 'nav1',
                component: nav1,
            },
            {
                path: '/nav2',
                name: 'nav2',
                component: nav2,
            },
        ]
    },
]

// 解决导航栏重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes
})

export default router
