<template>
  <h1>Vue3新特性 - 作用域插槽</h1>

  <Son5>
    <!-- <template slot="content" slot-scope="scoped">  -->
    <template v-slot:content="scoped">
      <div>{{ scoped.myName }}</div>
    </template>
  </Son5>
</template>
  
<script>
import Son5 from './son5.vue'
export default {
  components: {
    Son5
  }
}
</script>
  