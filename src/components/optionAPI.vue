<template>
  <h1>选项卡API</h1>
  <input type="text" v-model="username" />
  {{ username }}
  <br />

  <button @click="ClickMe">绑定事件-简写方式</button>

  <h1>计算属性</h1>
  {{ count }}

  <h1>ref用法</h1>
  <div ref="test">ref用法说明</div>
</template>

<script>
export default {
  // 数据结构
  data() {
    return {
      username: '',
    }
  },
  // 方法
  methods: {
    ClickMe() {
      alert('触发事件')
    }
  },
  //计算属性 计算属性与数据结构同级，都是用来表示数据，但是计算属性可以加上逻辑处理
  computed: {
    count() {
      //保留小数点后两位
      var num = 5.56789
      var res = num.toFixed(2)
      return res
    }
  },
  //侦听器 可以监控数据变化前后的值
  watch: {
    username(newval, oldval) {
      console.log(`新的值：${newval} --- 旧的值：${oldval}`)
    }
  },
  //生命周期钩子
  mounted() {
    // vue给我们提供一个操作dom的属性ref。绑定在dom元素上时，用起来与id差不多，通过this.$refs来调用
    console.log(this.$refs.test)
  },
}
</script>
