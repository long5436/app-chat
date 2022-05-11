<template>
  <div :class="$style.box">
    <!-- <perfect-scrollbar :class="$style.scroll"> -->
    <ChatItemRight />
    <ChatItemLeft />
    <ChatItemRight />
    <ChatItemLeft />
    <ChatItemRight />
    <ChatItemLeft />
    <ChatItemRight />
    <ChatItemLeft />
    <ChatItemRight />
    <ChatItemLeft />
    <ChatItemRight />
    <ChatItemRight />
    <!-- </perfect-scrollbar> -->
  </div>
</template>

<script setup>
import ChatItemRight from "@/components/index/ChatItemRight.vue";
import ChatItemLeft from "@/components/index/ChatItemLeft.vue";
</script>

<style lang="scss" module>
// .scroll {
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   overflow-x: hidden;
//   &::after {
//     content: "";
//     flex: 1;
//     background: #fff;
//   }
// }
.box {
  // flex: 1;
  position: relative;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  background: linear-gradient(to top, #ffe6d2, #ffd2da);
}
</style>