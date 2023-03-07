<template>
	<h1>keepAlive缓存组件</h1>

	<button @click="show = !show">切换</button>

	<!-- <KeepAlive include="A"> 只缓存A组件 -->
	<!-- <KeepAlive exclude="A"> A组件不会被缓存 -->
	<KeepAlive>
		<A v-if="show" />
		<B v-else />
	</KeepAlive>
	<br />
</template>

<script setup>
import { ref } from 'vue'
import A from './A.vue'
import B from './B.vue'

let show = ref(true)
</script>
