<template>
  <div class="box">
    <VueChatEmojiComponent
      :open="open"
      :width="width"
      :height="height"
      :searchLabel="'Tìm kiếm'"
      :backgroundColor="'transparent'"
      @toggle="showOrHide"
      @handle="selectedEmoji"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueChatEmojiComponent } from "../plugins/emoji/components";
// import "@nguyenvanlong/vue3-chat-emoji/dist/index.mjs.css";

const emit = defineEmits(["click-emoji"]);
const open = ref(true);
const width = ref("inherit");
const height = ref("inherit");

function showOrHide() {
  this.open = !this.open;
}

function selectedEmoji(args) {
  // console.log(args.unicode); /* return {...}*/
  emit("click-emoji", args.unicode);
}
</script>

<style lang="scss">
.box {
  position: absolute;
  width: 400px;
  /* top: 0; */
  bottom: 42px;
  right: 0;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
}
</style>
