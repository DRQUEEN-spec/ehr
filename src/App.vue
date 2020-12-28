<!--
 * @Author: your name
 * @Date: 2020-12-29 00:02:42
 * @LastEditTime: 2020-12-29 00:20:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ehr\src\App.vue
-->
<template>
  <div id="app">
    <a-button type="primary">Button></a-button>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.init();
    },
    methods: {
      init() {
        axios.get('')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    },
  }
</script>

<style>
</style>