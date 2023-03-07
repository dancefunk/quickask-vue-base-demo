<template>
	<h3>{{ sum }}</h3>
</template>
  
<script>
import { ref } from 'vue'

export default {
	async setup() {
		let sum = ref('请求成功')

		//创建一个异步请求对象
		let request = new Promise((resolve) => {
			setTimeout(() => {
				//标记为请求成功
				resolve({ sum })
			}, 5000)
		})

		return await request
	}
}
</script>
