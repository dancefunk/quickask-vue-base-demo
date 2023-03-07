<script setup>
  import {ref} from 'vue'

  let show = ref(true)
</script>

<template>
  <button @click="show = !show">切换</button>
  <Transition>
    <p v-if="show">
      v-enter 从隐藏到显示 <br />
      v-leave 从显示到隐藏 <br />
    </p>
  </Transition>
  <br/>
</template>


<style>
  .v-enter-active,.v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,.v-leave-to {
    opacity: 0;
  }
</style>