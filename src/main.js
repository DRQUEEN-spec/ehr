/*
 * @Author: your name
 * @Date: 2020-12-29 00:02:42
 * @LastEditTime: 2020-12-29 00:08:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ehr\src\main.js
 */
import Vue from 'vue';
import './plugins/axios'
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

Vue.component(Button.name, Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
