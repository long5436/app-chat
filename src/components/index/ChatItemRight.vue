<template>
  <div :class="$style.message">
    <span :class="$style.content">
      {{ content }}
    </span>
  </div>
</template>

<script setup>
//
const props = defineProps(["content"]);
</script>

<style lang="scss" module>
.message {
  position: relative;
  display: flex;
  justify-content: flex-end;
  // margin: 12px 0;
  border-color: #fff;
  border-width: 12px 0;
  margin: 6px 0;
  // overflow: hidden;
  .content {
    position: relative;
    display: inline-block;
    max-width: 400px;
    // border-radius: 10px;
    // background: #fdf79b;
    padding: 12px;
    background: none;

    &::before {
      content: "";
      position: absolute;
      inset: -6px;
      border-radius: 18px;
      border: 6px solid #fff;
    }

    &::after {
      content: "";
      position: absolute;
      top: -6px;
      right: 0px;
      /* z-index: -1; */
      width: 100vw;
      bottom: -6px;
      /* border-radius: 18px; */
      /* border: 6px solid #fff; */
      border-width: 6px 0 6px 0;
      border-color: #fff;
      border-style: solid;
    }
  }

  &::before {
    content: "";
    flex: 1;
    background: #fff;
  }

  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: -100%;
  //   bottom: -100%;
  //   right: -16px;
  //   width: 16px;
  //   background: #fff;
  // }
}
</style>