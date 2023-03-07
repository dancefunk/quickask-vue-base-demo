<script setup>
	import {ref} from 'vue'

	let username = ref('hello world')

	// defineProps()   获取组件传参属性API
	// defineEmits()   获取组件传参执行器API
	// defineExpose()  暴露当前组件的数据和方法
	// useSlots()  获取插槽对象
	// useAttrs()  获取自定义属性对象
</script>

<template>
    <h1>setup-组合式API</h1>
	<input type="text" v-model="username" />
	<h1>{{username}}</h1>
</template>
