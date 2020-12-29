/*
 * @Author: your name
 * @Date: 2020-12-29 00:02:42
 * @LastEditTime: 2020-12-29 01:11:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ehr\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/axios';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
