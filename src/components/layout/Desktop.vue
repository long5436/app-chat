<script setup>
import Header from "../Header.vue";
</script>

<template>
  <Header />
  <main :class="$style.main">
    <div :class="$style.sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div :class="$style.body">
      <slot name="body"></slot>
    </div>
  </main>
</template>
<style lang="scss" module>
.main {
  display: flex;

  .sidebar {
    width: 300px;
    height: calc(100vh - 40px);
    padding-top: 10px;
    border-right: 1px solid #ddd;
  }

  .body {
    flex: 1;
  }
}
</style>
