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
  display: flex;
  justify-content: flex-start;
  border-color: #fff;
  border-width: 12px 0;
  margin: 6px 0;
  .content {
    position: relative;
    display: inline-block;
    max-width: 400px;
    // border-radius: 10px;
    background: #a2eef3;
    padding: 12px;

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
      left: 0px;
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

  &::after {
    content: "";
    flex: 1;
    background: #fff;
  }
}
</style>