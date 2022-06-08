<script setup>
import Header from "../Header.vue";
</script>

<template>
  <div :class="$style.layoutFilter">
    <span :class="$style.item"></span>
    <span :class="$style.item"></span>
    <span :class="$style.item"></span>
    <span :class="$style.item"></span>
  </div>
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
    height: calc(100vh - 40px);
    padding-top: 10px;
    border-right: 1px solid #ddd;
  }

  .body {
    flex: 1;
  }
}

.layoutFilter {
  position: relative;
  z-index: -1;
  .item {
    position: fixed;
    // bottom: -100%;
    filter: blur(200px);

    &::after {
      border-radius: 50em;
    }

    &:nth-child(1) {
      // top: 100px;
      left: 10%;
      top: 5%;

      &::after {
        position: absolute;
        content: "";
        width: 500px;
        height: 500px;
        background: #fc6c6741;
      }
    }

    &:nth-child(2) {
      // top: 30%;
      top: 20%;
      left: 70%;

      &::after {
        position: absolute;
        content: "";
        width: 500px;
        height: 500px;
        background: #34a8532d;
      }
    }

    &:nth-child(3) {
      // bottom: 10%;
      top: 50%;
      left: 50%;

      &::after {
        content: "";
        position: absolute;
        width: 500px;
        height: 500px;
        background: #dfa5ff70;
      }
    }

    &:nth-child(4) {
      // bottom: 10%;
      left: 30%;
      top: 60%;

      &::after {
        content: "";
        position: absolute;
        width: 500px;
        height: 500px;
        background: #fffda570;
      }
    }
    @keyframes moveY {
      0% {
        bottom: -50%;
      }
      100% {
        bottom: 200%;
      }
    }

    @keyframes moveX {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(500px);
      }
    }
  }
}
</style>
