<template>
    <h1>Vue3新特性 - 插槽新写法</h1>
    <Son4>
      <!-- Vue2.x写法
      <div slot="parent">
        <div>父组件</div>
      </div>
      -->
      
      <template v-slot:parent>
        <div>父组件</div>
      </template>
    </Son4>
  </template>
  
  <script>
    import Son4 from './son4.vue'
  
    export default {
      components:{
        Son4
      }
    }
  </script>