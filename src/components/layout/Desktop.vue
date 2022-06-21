<script setup>
import Header from "../Header.vue";
</script>

<template>
  <div>
    <Header />
    <main :class="$style.main">
      <div :class="$style.sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div :class="$style.body">
        <slot name="body"></slot>
      </div>
    </main>
  </div>
</template>
<style lang="scss" module>
.main {
  display: flex;
  background: #fff;
  z-index: 222;
  .sidebar {
    width: 300px;
    height: calc(100vh - 50px);
    padding-top: 10px;
    border-right: 1px solid #ddd;
  }

  .body {
    flex: 1;
  }
}

@media screen and (max-width: 768px) {
  .main {
    .sidebar {
      width: 88px;
    }
    // .body {
    //   flex: 1;
    // }
  }
}
</style>
