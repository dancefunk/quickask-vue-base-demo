<template>
    <h1>Vue3新特性 - suspense - 异步加载组件</h1>
	<Suspense>
		<template #default>
			<async></async>
		</template>
		<template #fallback>
			<b>正在加载中.....</b>
		</template>
	</Suspense>
	<br/>
</template>

<script>
	import async from './async.vue'

	export default {
		components:{
			async
		}
	}
</script>
