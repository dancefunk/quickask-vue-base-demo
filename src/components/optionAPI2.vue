<template>
	<h1>选项式API</h1>
	<h1>props验证</h1>
	{{ propC }}
</template>

<script>
export default {
	props: {
		// 基础类型检测, null意味着任何类型都行
		propA: Number,

		// 多种类型
		propB: [String, Number],

		// 必传且是String
		propC: {
			type: String,
			required: true
		},

		// 数字有默认值
		propD: {
			type: Number,
			default: 101
		},

		// 数组、默认值是一个工厂函数返回对象
		propE: {
			type: Object,
			default: function () {
				console.log("propE default invoked.");
				return { message: "I am from propE." };
			}
		},

		// 自定义验证函数
		propF: {
			validator: function (value) {
				return value > 100;
			}
		}
	}
}
</script>