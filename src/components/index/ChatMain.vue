<template>
  <div :class="$style.header">
    <HeaderLeft />
  </div>
  <div :class="$style.main">
    <MessageMain />
    <MessageInput />
  </div>
</template>

<script setup>
import MessageMain from "@/components/index/MessageMain.vue";
import MessageInput from "@/components/index/MessageInput.vue";
import HeaderLeft from "@/components/index/HeaderLeft.vue";
</script>

<style lang="scss" module>
.header {
  padding: 18px;
  box-shadow: 20px 2px 20px 2px rgba(136, 136, 136, 0.212);
}

.main {
  // overflow: hidden;
  padding: 18px;
  // display: flex;
  // flex-direction: column;
  width: 100%;
  // height: 40px;
  // background: #000;
}
</style>