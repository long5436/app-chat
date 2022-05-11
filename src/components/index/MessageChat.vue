<template>
  <div :class="$style.box">
    <!-- <perfect-scrollbar :class="$style.scroll"> -->
    <MessageRight />
    <MessageLeft />
    <MessageRight />
    <MessageLeft />
    <MessageRight />
    <MessageLeft />
    <MessageRight />
    <MessageLeft />
    <MessageRight />
    <MessageLeft />
    <MessageRight />
    <MessageRight />
    <!-- </perfect-scrollbar> -->
  </div>
</template>

<script setup>
import MessageRight from "@/components/index/MessageRight.vue";
import MessageLeft from "@/components/index/MessageLeft.vue";
</script>

<style lang="scss" module>
.scroll {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  &::after {
    content: "";
    flex: 1;
    background: #fff;
  }
}
.box {
  position: relative;
  height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  background: linear-gradient(to top, #ffe6d2, #ffd2da);
}
</style>