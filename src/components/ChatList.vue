<script setup>
import av2 from "@/assets/img/av2.jpg";
import { formatTime } from "@/plugins/formatDate";
import sortArray from "sort-objects-array";
import { useUserStore } from "@/stores/user";
import { useChatStore } from "@/stores/chat";
import { getUser, getChat } from "@/firebase/services";
import {
  watchSyncEffect,
  watchEffect,
  reactive,
  ref,
  watch,
  computed,
} from "vue";
import createAvtString from "@/plugins/createAvtString";
import {
  collection,
  db,
  query,
  where,
  getDocs,
  onSnapshot,
} from "@/firebase/config";

//
const userStore = useUserStore();
const chatStore = useChatStore();
const currentChatId = ref("");

const chatList = computed(() => chatStore.getChatList);
const chatListSnapShot = reactive({ data: [], data2: [] });
chatListSnapShot.data = chatList.value;

watch(chatList, (newVal) => {
  console.log("da thay doi");
  chatListSnapShot.data2 = newVal;
  // chatListSnapShot.data = newVal;

  chatListSnapShot.data2.forEach(async (e, index) => {
    console.log(e.id, index);
    console.log("bi chay lai");
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, where("chatId", "==", e.id));
    const querySnapshot = await getDocs(q);

    let unsubscribe = onSnapshot(q, (querySnapshot) => {
      // watch(chatListSnapShot, () => {
      //   unsubscribe();
      // });
      querySnapshot.forEach(async (document) => {
        // console.log(document.data);
        chatListSnapShot.data2[index].mess = document.get("chatData").pop();
        chatListSnapShot.data2[index].updatedAt = document
          .get("chatData")
          .pop().createdAt;
        chatListSnapShot.data = sortArray(
          chatListSnapShot.data2,
          "updatedAt",
          "desc"
        );
      });
    });
  });
});

watchEffect(() => {});

// methods

async function handleClick(data) {
  // console.log(data.friendInfo);
  // console.log(chatStore);
  if (!chatStore.getChatContent(data.id)) {
    const chatContentData = await getChat(data.id);
    // console.log(chatContentData);
    chatStore.addChatData(chatContentData);
  }
  // // console.log(data.chatData);
  // // chatStore.addChatData(data.chatData);
  chatStore.addCurrentChatUser(data);
  currentChatId.value = data.friendInfo?.uid;
}
</script>

<template>
  <div :class="$style.action">
    <button :class="[$style.btn, $style.btnActive]">
      <span> Tất cả </span>
    </button>
    <button :class="$style.btn">
      <span> Chưa đọc </span>
      <span :class="$style.noti"> 23 </span>
    </button>
  </div>
  <div :class="$style.listMessages">
    <div
      v-for="(i, index) in chatListSnapShot.data"
      :key="index"
      :class="[
        $style.item,
        { [$style.itemActive]: i.friendInfo?.uid === currentChatId },
      ]"
      @click="handleClick(i)"
    >
      <div :class="$style.avt">
        <img
          v-if="i.friendInfo?.photoURL"
          :src="i.friendInfo.photoURL || av2"
          alt=""
          :class="$style.avtImg"
        />
        <div
          v-else
          :class="$style.avtText"
          :style="{
            background: i.friendInfo?.theme.backgroundColor,
            color: i.friendInfo?.theme.textColor,
          }"
        >
          <span>{{ createAvtString(i.friendInfo?.displayName).name }} </span>
        </div>
      </div>
      <div :class="$style.content">
        <h3>{{ i.friendInfo?.displayName }}</h3>
        <p :class="$style.message">{{ i.mess?.content }}</p>
      </div>
      <div :class="$style.info">
        <span v-if="i.mess">{{ formatTime(i.mess?.createdAt.seconds) }}</span>
        <span v-else>{{ formatTime(i.createdAt.seconds) }}</span>
        <span :class="$style.noti"> 12 </span>
      </div>
    </div>
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
    border-bottom: 1px solid #ddd;
    align-items: center;
    height: 80px;
    padding: 0 20px;

    .avt {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      .avtImg {
        border-radius: 50em;
        width: inherit;
        height: inherit;
      }

      .avtText {
        display: inline-flex;
        // justify-content: ce;
        background: #ddd;
        border-radius: 50em;
        width: inherit;
        height: inherit;

        span {
          margin: auto;
          font-size: 1.3rem;
        }
      }
    }

    .content {
      flex: 1;
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
    background: #fff;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background: #ec532a;
    }
  }
}
</style>
