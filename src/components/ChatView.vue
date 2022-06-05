<script setup>
import ChatMessageLeft from "./ChatMessageLeft.vue";
import ChatMessageRight from "./ChatMessageRight.vue";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import {
  reactive,
  computed,
  watch,
  getCurrentInstance,
  onMounted,
  watchEffect,
  watchSyncEffect,
} from "vue";
// import {
//   db,
//   collection,
//   doc,
//   setDoc,
//   query,
//   where,
//   getDocs,
// } from "@/firebase/config";

//
const { proxy } = getCurrentInstance();
const chatStore = useChatStore();
const userStore = useUserStore();
const dChat = reactive({ data: [] });
const chats = computed(() => {
  console.log(chatStore.getChats);
  return chatStore.getChats;
});
const user = userStore.userinfo;
// const props = defineProps(["data"]);
// const chatData = computed(() => props.data);
// const chatMessage = reactive
// dChat.data = chats;

function scrollBottom() {
  const element = proxy.$refs.chatMain;
  //   console.log(n);
  if (element) {
    const scrollHeight = element.scrollHeight;
    setTimeout(() => {
      // element.scrollTop = scrollHeight;

      element.scroll({
        top: 100000,
        left: 0,
        behavior: "smooth",
      });
    }, 50);
  }
}

onMounted(() => {
  scrollBottom();
});

watch(dChat, (n) => {
  scrollBottom();
});

//
watch(chats, (n) => {
  console.log(n);
});
</script>
<template>
  <div :class="$style.chatView" ref="chatMain">
    <template v-for="item in chats" :key="item.index">
      <ChatMessageRight v-if="item.uid === user.uid" :data="item" />
      <ChatMessageLeft v-else :data="item" />
    </template>
  </div>
</template>
<style lang="scss" module>
.chatView {
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 12px;
}
</style>
