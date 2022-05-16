<template>
  <div :class="$style.siderBar">
    <div>
      <Menu />
    </div>
    <div :class="$style.childrenSideBar">
      <Search :class="$style.search" />
      <ListMess />
    </div>
  </div>
  <div :class="$style.main">
    <slot></slot>
  </div>
</template>

<script setup>
import ListMess from "@/components/sidebar/ListMess.vue";
import Search from "@/components/sidebar/Search.vue";
import Menu from "@/components/sidebar/Menu.vue";
</script>

<style lang="scss" module>
.siderBar {
  position: fixed;
  display: flex;
  width: 350px;
  height: 100vh;
  //   background: #000;
  border-right: 1px solid #ddd;
  // box-shadow: 2px 0 20px 2px rgba(136, 136, 136, 0.212);

  .childrenSideBar {
    padding: 18px;
  }

  .search {
    margin: 12px 0;
  }
}

.main {
  position: fixed;
  right: 0px;
  left: 350px;
  //   width: calc(100vh);
}
</style>
