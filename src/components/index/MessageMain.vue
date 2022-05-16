<template>
  <div :class="$style.box" ref="chatMain">
    <!-- <perfect-scrollbar :class="$style.scroll"> -->
    <div v-for="item in dataChat.data" :key="item.index">
      <ChatItemRight v-if="item.user === 1" :content="item.content" />
      <ChatItemLeft v-else :content="item.content" />
    </div>
    <!-- </perfect-scrollbar> -->
  </div>
</template>

<script setup>
import ChatItemRight from "@/components/index/ChatItemRight.vue";
import ChatItemLeft from "@/components/index/ChatItemLeft.vue";
import { chatStore } from "@/stores/counter";
import { reactive, getCurrentInstance, onMounted, watch, inject } from "vue";

//
const store = chatStore();
const dataChat = reactive({ data: [] });
const { proxy } = getCurrentInstance();

// hooks
onMounted(() => {
  const element = proxy.$refs.chatMain;
  // console.log(element);
  element.scrollTop = element.scrollHeight;
});

watch(dataChat, (n) => {
  const element = proxy.$refs.chatMain;
  if (element) {
    const scrollHeight = element.scrollHeight;
    setTimeout(() => {
      // element.scrollTop = scrollHeight;

      element.scroll({
        top: 1000,
        left: 0,
        behavior: "smooth",
      });
    }, 50);
  }
});

//
dataChat.data = store.getMessageList;
</script>

<style lang="scss" module>
.box {
  // flex: 1;
  position: relative;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  margin: 0 16px;
  padding-right: 12px;
}
</style>
