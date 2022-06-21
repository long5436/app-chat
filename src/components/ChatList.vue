<script setup>
import av2 from "@/assets/img/av2.jpg";
import audio from "@/assets/audio/Ding-Dong.mp3";
import { formatTime } from "@/plugins/formatDate";
import sortArray from "sort-objects-array";
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";
import { useChatStore } from "@/stores/chat";
import { useRouter, useRoute } from "vue-router";
import ChatListAvt from "./ChatListAvt.vue";
import ChatListDisplayName from "./chatListDisplayName.vue";
import { getUser, getChat } from "@/firebase/services";
import {
  watchSyncEffect,
  watchEffect,
  reactive,
  ref,
  watch,
  computed,
  onMounted,
} from "vue";

import {
  collection,
  db,
  query,
  where,
  getDocs,
  onSnapshot,
} from "@/firebase/config";

//
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const chatStore = useChatStore();
const appStore = useAppStore();
const currentChatId = ref("");

const userInfo = computed(() => userStore.getUserinfo);
const chatList = computed(() => chatStore.getChatList);
const chatListSnapShot = reactive({ data: [], data2: [] });
// chatListSnapShot.data = chatList.value;

function play() {
  // console.log("okasa");
  let audioMess = new Audio(audio);
  audioMess.play();
}

watch(chatList, (newVal) => {
  console.log("da thay doi");
  chatListSnapShot.data2 = newVal;
  chatListSnapShot.data = newVal;

  chatListSnapShot.data2.forEach(async (e, index) => {
    // console.log(e.id, index);
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, where("chatId", "==", e.id));
    const querySnapshot = await getDocs(q);

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(async (document) => {
        const uid = document.get("chatData").pop()?.uid;

        if (uid != userInfo.value.uid) {
          play();
        }

        chatListSnapShot.data2[index].mess = document.get("chatData").pop();
        chatListSnapShot.data2[index].updatedAt = document
          .get("chatData")
          .pop()?.createdAt;
        chatListSnapShot.data = sortArray(
          chatListSnapShot.data2,
          "updatedAt",
          "desc"
        );
      });
    });

    // if (co > 1) unsubscribe();
  });
});

function setDataChat(data) {
  let currentChatUser;
  // console.log({
  //   1: data.membersInfo[0].uid,
  //   2: userInfo.value.uid,
  // });
  if (data.membersInfo[0].uid === userInfo.value.uid) {
    currentChatUser = data.membersInfo[1];
  } else {
    currentChatUser = data.membersInfo[0];
  }
  // console.log(currentChatUser);
  // // console.log(data.chatData);
  // // chatStore.addChatData(data.chatData);
  chatStore.addCurrentChatUser({
    user: currentChatUser,
    id: data.id,
  });
  currentChatId.value = data.id;
}

onMounted(async () => {
  // console.log(route.params.id);
  // const chatContentData = await getChat(route.params.id);
  // chatStore.addChatData(chatContentData);

  // console.log(chatContentData);

  const unwatch = watch(chatList, (n) => {
    // console.log(chatList.value);
    // console.log(route.params.id);
    const a = chatList.value.find((e) => +e.urlId === +route.params.id);
    if (a) {
      console.log("da vo");
      handleClick(a);
      // unwatch();
    }
  });

  // setDataChat();
});
// methods

async function handleClick(data) {
  // console.log(data);
  // console.log(data.friendInfo);
  // console.log(chatStore);
  if (!chatStore.getChatContent(data.id)) {
    const chatContentData = await getChat(data.id);
    // console.log(chatContentData);
    const theme = chatContentData.theme;
    chatStore.addChatData(chatContentData);
    chatStore.setTheme(theme);
  } else {
    const theme = chatStore.getChatContent(data.id).theme;
    chatStore.setTheme(theme);
  }

  setDataChat(data);

  router.push({
    name: "chat",
    params: {
      id: data.urlId,
    },
  });
}
</script>

<template>
  <div :class="$style.action" v-if="false">
    <button :class="[$style.btn, $style.btnActive]">
      <span> Tất cả </span>
    </button>
    <button :class="$style.btn">
      <span> Chưa đọc </span>
      <span :class="$style.noti"> 23 </span>
    </button>
  </div>
  <div :class="$style.listMessages">
    <template v-for="(i, index) in chatListSnapShot.data" :key="index">
      <div
        v-if="i.mess"
        :class="[$style.item, { [$style.itemActive]: i.id === currentChatId }]"
        @click="handleClick(i)"
      >
        <ChatListAvt :data="i" />
        <div :class="$style.content">
          <ChatListDisplayName :data="i" />
          <div :class="$style.body">
            <div>
              <p :class="$style.message">{{ i.mess?.content }}</p>
            </div>
            <span v-if="i.mess">
              . {{ formatTime(i.mess?.createdAt.seconds) }}</span
            >

            <span v-else> . {{ formatTime(i.createdAt?.seconds) }}</span>
          </div>
        </div>
        <div :class="$style.info" v-if="false">
          <span v-if="i.mess">{{ formatTime(i.mess?.createdAt.seconds) }}</span>
          <span v-else>{{ formatTime(i.createdAt?.seconds) }}</span>
          <span :class="$style.noti" v-if="false"> 12 </span>
        </div>
      </div>
    </template>
  </div>
</template>
<style lang="scss" module>
.action {
  display: flex;
  padding: 0 20px;
  .btn {
    flex: 1;
    display: flex;
    text-align: left;
    padding-left: 0;
    height: 30px;
    align-items: center;
    border: 0;
    background: none;
    border-bottom: 2px solid rgba(85, 85, 85, 0.13);

    span {
      line-height: 30px;
    }
    .noti {
      background: #ec532a;
      height: 16px;
      line-height: 16px;
      padding: 0 2px;
      border-radius: 50em;
      color: #fff;
      margin-left: 4px;
    }

    &:hover {
      border-bottom: 2px solid #ec532a;
    }
  }

  .btnActive {
    border-bottom: 2px solid #ec532a;
  }
}

.listMessages {
  overflow: auto;
  .item {
    position: relative;
    display: flex;
    // border-bottom: 1px solid #ddd;
    align-items: center;
    height: 70px;
    padding: 0 10px;
    margin: 0 10px;

    .content {
      flex: 1;
      overflow: hidden;

      .body {
        display: flex;
        // justify-content: space-between;

        div {
          flex: 1;
        }
      }

      .message {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        color: #7e7e7e;
      }
    }

    .info {
      padding-left: 10px;
      text-align: right;
      color: #7e7e7e;
      .noti {
        display: inline-flex;
        align-items: center;
        line-height: 16rem;
        background: #ec532a;
        padding: 0 2px;
        border-radius: 50em;
        color: #fff;
        height: 16px;
        font-size: 0.7rem;
      }
    }
  }

  .item:hover,
  .itemActive {
    position: relative;
    cursor: pointer;
    background: #efefef;
    border-radius: 6px;

    // &::before {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   height: 100%;
    //   width: 2px;
    //   background: #ec532a;
    // }
  }
}
</style>
