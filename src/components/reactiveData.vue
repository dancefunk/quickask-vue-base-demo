<script setup>
import { ref, reactive, toRef, toRefs, readonly } from "vue";

// 创建单个响应式数据
let username = ref("张三");

// 修改单个响应式数据
setTimeout(() => {
	username.value = "李四";
}, 3000);

// 创建复杂类型响应式数据
let info = reactive({
	name: "张三",
	age: 20,
	sex: "男",
});

// 修改复杂类型响应式数据
setTimeout(() => {
	info.name = "李四";
	info.age = 30;
	info.sex = "女";
}, 3000);

// 单个的抽离
let name = toRef(info, "name");

// 抽离多个元素 抽离的元素 必须是 info 对象中有的属性
let { sex, age } = toRefs(info);

//设置只读属性
let readname = readonly(username);
</script>

<template>
	<h1>Vue3新特性 - 响应式数据 - ref reactive toRef toRefs</h1>
	<p>
		ref - 简单类型的响应式数据 <br />
		reactive - 复杂类型的响应式数据 <br />
		toRef - 从复杂类型中抽离单个 响应式属性出来 <br />
		toRefs - 从复杂类型中抽离多个 响应式属性出来 <br />
		readonly - 设置属性只读 <br />
	</p>

	<h1>ref - 简单类型的响应式数据</h1>
	<input type="text" v-model="username" /><br />
	{{ username }}

	<h2>reactive - 复杂类型的响应式数据</h2>
	<input type="text" v-model="info.name" /><br />
	{{ info.name }}

	<h2>toRef - 从复杂类型中抽离单个 响应式属性出来</h2>
	<input type="text" v-model="name" /><br />
	{{ name }}

	<h2>toRefs - 从复杂类型中抽离多个 响应式属性出来</h2>
	<input type="text" v-model="age" /><br />
	{{ age }}

	<h2>readonly - 设置属性只读</h2>
	<input type="text" v-model="readname" /><br />
	{{ readname }}
	<br />
</template>
