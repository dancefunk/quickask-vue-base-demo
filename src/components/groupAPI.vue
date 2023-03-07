<script setup>
import { ref, computed, watch, onMounted } from 'vue'

// 创建响应式数据
let username = ref('')

// 事件绑定
function ClickMe() {
  alert('触发事件')
}

// 计算属性 计算属性与数据结构同级，都是用来表示数据，但是计算属性可以加上逻辑处理
let count = computed(() => {
  var num = 150.417
  return num.toFixed(2)
})

//侦听器 可以监控数据变化前后的值
watch(username, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

// 获取组件中ref="hello"的真实dom元素
const hello = ref(null)

// 生命周期钩子
onMounted(() => {
  console.log(hello.value) // <input type="text">
  console.log(hello.value.value) // 张三
})
</script>

<template>
  <h1>组合式API</h1>
  <input type="text" v-model="username" />
  {{ username }}
  <br />

  <button @click="ClickMe">绑定事件-简写方式</button>

  <h1>计算属性</h1>
  {{ count }}

  <h1>Ref用法 获取DOM节点</h1>
  <input type="text" value="张三" ref="hello" />
  <br />
</template>