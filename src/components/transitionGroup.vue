<script setup>
import { ref, reactive } from "vue";

let items = ref([1, 2, 3]);

function add() {
  items.value.push(Math.random());
}
</script>

<template>
  <button @click="add">追加元素</button>

  <transition-group name="list" tag="ul">
    <li v-for="item in items" :key="item">Id: {{ item }}</li>
  </transition-group>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
