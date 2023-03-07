<template>
	A组件：<input type="text" />
</template>

<script setup>
	import { ref,onActivated,onDeactivated, onMounted, onUnmounted } from 'vue'

	onActivated(() => {
		console.log("keepAlive A 初始化")
	})

	onDeactivated(() => {
		console.log("keepAlive A 销毁")
	})
</script>
