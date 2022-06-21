<script setup>
import ChatMessageLeft from "./ChatMessageLeft.vue";
import ChatMessageRight from "./ChatMessageRight.vue";
import ChatMessageNoti from "./ChatMessageNoti.vue";
import ChatMessageImage from "./ChatMessageImage.vue";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import {
  reactive,
  computed,
  watch,
  ref,
  getCurrentInstance,
  onMounted,
  onUpdated,
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
const currentChatId = computed(() => chatStore.currentChatId);
const btnScroll = ref(false);

const chats = computed(() => {
  // console.log(currentChatId.value);
  if (chatStore.getChatContent(currentChatId.value)?.chatData) {
    return chatStore.getChatContent(currentChatId.value).chatData;
  }
});

dChat.data = chats.value;
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
  const element = proxy.$refs.chatMain;
  let scrollHeight;
  setTimeout(() => {
    scrollHeight = element.scrollHeight;
    // console.log(scrollHeight);
  }, 2000);

  // element.addEventListener("scroll", () => {
  //   if (element.scrollTop < scrollHeight - 300) {
  //     console.log("ok");
  //     btnScroll.value = true;
  //   } else {
  //     console.log("not ok");
  //     btnScroll.value = false;
  //   }
  // });
});

watch(dChat, (n) => {
  scrollBottom();
});

//
// watch(chats, (n) => {
//   console.log(n);
// });

onUpdated(() => {
  scrollBottom();
});
</script>
<template>
  <div :class="$style.chatView" ref="chatMain">
    <div ref="chatContent" :class="$style.chatContent">
      <template v-for="item in chats" :key="item.index">
        <ChatMessageImage
          v-if="item?.type === 'image'"
          :huong="item.uid === user.uid ? 'right' : 'left'"
          :data="item"
        />
        <ChatMessageNoti v-else-if="item?.type === 'theme'" :data="item" />
        <ChatMessageRight v-else-if="item.uid === user.uid" :data="item" />
        <ChatMessageLeft v-else :data="item" />
      </template>
    </div>
    <div :class="$style.scroll">
      <div v-show="btnScroll" :class="$style.btn" @click="scrollBottom">
        <v-icon name="io-arrow-down-outline" :class="$style.icon" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
.chatView {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 12px;

  .chatContent {
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-end;
    // height: 100%;

    .scroll {
      position: fixed;
      bottom: 120px;
      // left: 50%;
      width: calc(100vw - 300px);
      display: flex;
      right: 0;
      // background: yellow;
      // transform: translateX(-300px);

      .btn {
        margin: 0 auto;
        background: #fff;
        border-radius: 50em;
        border: 1px solid #ddd;
        width: 40px;
        height: 40px;
        display: flex;
        cursor: pointer;

        &:hover {
          background: #eee;
        }
        .icon {
          margin: auto;
          width: 24px;
          height: 24px;
          color: #ff7204;
        }
      }

      // transform: translateX(-50%);
    }
  }
}
</style>
