<script setup>
  import groupAPI2 from './groupAPI2.vue'
</script>

<template>
    <h1>调用组件</h1>
  <groupAPI2 :prop-c="'hello'"></groupAPI2>
  <br/>
</template>
