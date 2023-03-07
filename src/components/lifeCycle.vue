<script setup>
import {
ref,
onBeforeMount,
onMounted,
onBeforeUpdate,
onUpdated,
onBeforeUnmount,
onUnmounted,
onRenderTracked,
onRenderTriggered
} from 'vue'

//响应式数据
let username = ref('hello world')
console.log('setup 代替了Vue2中的 beforeCreated 和 created 创建前后的钩子')

// 挂载前后
onBeforeMount(() => { console.log('组件挂载前触发的钩子') })
onMounted(() => { console.log('组件挂载后触发的钩子') })

// 更新前后
onBeforeUpdate(() => { console.log('数据更新前触发的钩子') })
onUpdated(() => { console.log('数据更新后触发的钩子') })

// 卸载前后
onBeforeUnmount(() => { console.log('组件卸载前调用') })
onUnmounted(() => { console.log('组件卸载后调用') })

//仅在开发模式下可用的调试钩子

// 每次渲染后重新收集响应式依赖，在onMounted前触发，页面更新后也会触发
onRenderTracked(() => { console.log('调试钩子 - onRenderTracked') })

// 每次触发页面重新渲染时的自动执行，在onBeforeUpdate之前触发
onRenderTriggered(() => { console.log('调试钩子 - onRenderTracked') })
</script>

<template>
  <h1>生命周期</h1>
  <input type="text" v-model="username" />{{ username }}
  <br />
</template>
