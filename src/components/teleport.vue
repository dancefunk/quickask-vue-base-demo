<template>
    <h1>Vue3新特性 - Teleport 传送门</h1>
  
    <!-- 挂载点  将这个挂载点 放到 index.html中-->
    <!-- <div id="model"></div> -->
  
    <teleport to="#model"> 
      <!-- 挂载内容 -->
      <h3>这个是挂载的内容</h3>
    </teleport>
  </template>
  