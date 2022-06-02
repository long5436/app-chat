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
import {
  db,
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
} from "@/firebase/config";

//
const { proxy } = getCurrentInstance();
const chatStore = useChatStore();
const userStore = useUserStore();
const dChat = reactive({ data: [] });
const chats = computed(() => {
  return chatStore.getChats;
});
const user = userStore.userinfo;

dChat.data = chats;

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

// watchSyncEffect(async () => {
//   const collectionRef = collection(db, "chats");
//   const q = query(collectionRef, where("uid", "==", user.uid));
//   const querySnapshot = await getDocs(q);

//   querySnapshot.forEach(async (document) => {
//     console.log(document.data());
//   });
// });
</script>
<template>
  <div :class="$style.chatView" ref="chatMain">
    <template v-for="item in chats" :key="item.index">
      <ChatMessageLeft v-if="item.user === 2" :data="item" />
      <ChatMessageRight v-else :data="item" />
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
