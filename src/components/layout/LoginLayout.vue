<template>
  <div :class="$style.layout">
    <div :class="$style.layoutFilter">
      <span :class="$style.item"></span>
      <span :class="$style.item"></span>
      <span :class="$style.item"></span>
    </div>
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" module>
.layout {
  position: relative;
  display: flex;
  height: 100vh;

  &:after {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(196, 205, 230, 0.2);
    backdrop-filter: blur(70px);
  }

  .layoutFilter {
    .item {
      position: fixed;
      border-radius: 50em;
      filter: blur(20px);

      &:nth-child(1) {
        top: 100px;
        left: 10%;
        width: 200px;
        height: 200px;
        background: #fc6c6741;
      }

      &:nth-child(2) {
        top: 30%;
        right: 5%;
        width: 250px;
        height: 250px;
        background: #34a8532d;
      }

      &:nth-child(3) {
        bottom: 10%;
        left: 1%;
        width: 300px;
        height: 300px;
        background: #dfa5ff70;
      }
    }
  }

  .content {
    z-index: 1;
    margin: auto;
  }
}
</style>
