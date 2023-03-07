<template>
	B组件：<input type="text" />
</template>

<script setup>
	import { ref,onActivated,onDeactivated, onMounted, onUnmounted } from 'vue'

	onActivated(() => {
		console.log("keepAlive B 初始化")
	})

	onDeactivated(() => {
		console.log("keepAlive B 销毁")
	})
</script>
