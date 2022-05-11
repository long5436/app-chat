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
const smoothScroll = inject("smoothScroll");

//
const store = chatStore();
const dataChat = reactive({ data: [] });
const { proxy } = getCurrentInstance();

// hooks
onMounted(() => {
  const element = proxy.$refs.chatMain;
  console.log(element);
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
  margin: 0 16px;
  // padding-right: 16px;

  &::after {
    content: "";
    flex: 1;
    background: #fff;
  }

  // &::before {
  //   position: absolute;
  //   content: "";
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   height: 100%;
  //   width: 16px;
  //   background: #fff;
  // }
}
</style>