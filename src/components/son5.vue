<template>
	<slot name="content" :myName="myName"></slot>
</template>

<script>
import { ref } from 'vue'
export default {
	setup () 
	{
		let myName = ref("hello world")
		return { myName }
	},
}
</script>
