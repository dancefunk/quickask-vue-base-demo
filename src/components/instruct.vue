<template>
  <input type="text" v-model="username" />
  双向绑定：{{ username }}
  <br />
  <div v-if="os == 'windows'">windows系统</div>
  <div v-else-if="os == 'linux'">linux系统</div>
  <div v-else-if="os == 'mac'">苹果系统</div>
  <div v-else>其他系统</div>
  <br />
  <div v-show="IsShow">根据IsShow这个变量来判断显示还是隐藏</div>
  <br />
  <table width="500px" border="1px">
    <tr>
      <td>姓名</td>
      <td>性别</td>
      <td>年龄</td>
    </tr>
    <tr v-for="(item, index) in userlist" :key="index">
      <td>{{ item.nickname }}</td>
      <td>{{ item.sex }}</td>
      <td>{{ item.age }}</td>
    </tr>
  </table>
  <br />
  {{ output }}
  <div v-html="output"></div>
  <div v-text="output"></div>
  <br />
  <span v-pre>{{this will not be compiled}}</span>
  <br />
  <div v-bind:title="title">绑定元素属性</div>
  <div :title="title">简写方式</div>
  <br />
  <button v-on:click="ClickMe">绑定事件</button>
  <button @click="ClickMe">绑定事件-简写方式</button>
  <br />
</template>
<script>
export default {
  // 数据结构
  data() {
    return {
      username: '',
      os: 'linux',
      IsShow: true,
      userlist: [
        {
          nickname: '张三',
          sex: '男',
          age: 15
        },
        {
          nickname: '李四',
          sex: '女',
          age: 17
        },
        {
          nickname: '王五',
          sex: '男',
          age: 19
        }
      ],
      output: "<u>只是一个段落</u>",
      title: '绑定元素属性',

    }
  },
  // 方法
  methods: {
    ClickMe() {
      alert('触发事件')
    }
  },
}
</script>
