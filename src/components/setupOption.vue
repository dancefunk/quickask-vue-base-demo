<template>
    <h1>setup-选项式API</h1>
	<input type="text" v-model="username" />
	<h1>{{username}}</h1>
</template>

<script>
	import {ref} from 'vue'
	export default {
		setup(props, context)
		{
			//获取传递的属性
			console.log(props)

			// 获取传递的自定义属性（非响应式的对象，等价于 $attrs）
			console.log(context.attrs)

			// 插槽（非响应式的对象，等价于 $slots）
			console.log(context.slots)

			// 触发事件（函数，等价于 $emit）
			console.log(context.emit)

			// 暴露公共属性（函数）
			console.log(context.expose)


			let username = ref('hello world')

			return {
				username
			}
		}
	}
</script>
