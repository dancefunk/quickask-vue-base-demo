<template>
	<h1>Vue3新特性 - provide 与 inject (父组件向子组件传递数据与方法)</h1>
	<Son3></Son3>
	<br />
</template>

<script>
import { ref, provide } from 'vue'
import Son3 from './son3.vue'

export default {
	setup() {
		const name = ref('张三')

		// provide(别名, 要传递的数据和方法)
		provide('myName', name)
		provide('HandleClick', () => {
			name.value = 'zhangsan'
		})
	},
	components: { Son3 }
}
</script>
