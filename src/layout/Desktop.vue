<template>
  <div :class="$style.siderBar">
    <h1>Chat</h1>
    <Search :class="$style.search" />
    <ListMess />
  </div>
  <div :class="$style.main">
    <slot></slot>
  </div>
</template>

<script setup>
import ListMess from "@/components/sidebar/ListMess.vue";
import Search from "@/components/sidebar/Search.vue";
</script>

<style lang="scss" module>
.siderBar {
  position: fixed;
  width: 300px;
  height: 100vh;
  //   background: #000;
  //   border-right: 1px solid #ddd;
  box-shadow: 2px 0 20px 2px rgba(136, 136, 136, 0.212);
  padding: 18px;

  .search {
    margin: 12px 0;
  }
}

.main {
  position: fixed;
  right: 0px;
  left: 300px;
  //   width: calc(100vh);
}
</style>