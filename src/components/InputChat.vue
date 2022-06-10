<script setup>
import { ref, getCurrentInstance, watch, computed } from "vue";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import { sendMessage } from "@/firebase/services";
import SendIcon from "@/components/icons/send.vue";

import {
  collection,
  db,
  query,
  arrayUnion,
  getDocs,
  where,
  updateDoc,
} from "@/firebase/config";

//
const chatStore = useChatStore();
const userStore = useUserStore();
const userInfo = computed(() => userStore.getUserinfo);
const currentChatId = computed(() => chatStore.getCurrentChatId);
const { proxy } = getCurrentInstance();
const input = ref("");
const textShow = ref("true");
const showMic = ref("true");
const enableSendBtn = ref("false");

function handleChange(event) {
  if (event.keyCode === 13) {
    event.target.innerText = "";
  }
  input.value = event.target.innerText;
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    submit();
    event.target.innerText = "";
  } else if (event.keyCode >= 49 && event.keyCode <= 222) {
    textShow.value = false;
  }
}

function submit(e) {
  if (input.value) {
    sendMessage("messages", currentChatId.value, {
      displayName: userInfo.value.username,
      photoURL: userInfo.value.photo,
      uid: userInfo.value.uid,
      content: input.value,
      createdAt: new Date(),
      theme: userInfo.value.theme,
    });

    const el = proxy.$refs.iput;

    if (el) el.innerText = "";
    input.value = "";
  }
}

// import { getDatabase, ref, runTransaction } from "firebase/database";
async function focus(status) {
  // const collectionRef = collection(db, "messages");
  // const q = query(
  //   collectionRef,
  //   where(
  //     "chatId",
  //     "==",
  //     "2RbRxEfv37gI1yqsmzZSJfDFTS8tOWjfkRrN7ZHhfgzZh1nwpC3FUwoC"
  //   )
  // );
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach(async (document) => {
  //   await updateDoc(collectionRef, { typing: arrayUnion("balabal") });
  // });
  // if (status) {
  //   console.log("ok");
  // } else {
  //   console.log("not ok");
  // }
}
//

watch(input, (n) => {
  if (n.length > 0) {
    textShow.value = false;
    showMic.value = false;
    enableSendBtn.value = false;
    focus(true);
  } else {
    textShow.value = true;
    enableSendBtn.value = true;
    showMic.value = true;
    focus(false);
  }
});
</script>

<template>
  <div :class="$style.box">
    <div :class="$style.input">
      <button :class="[$style.mic, { [$style.hide]: !showMic }]">
        <v-icon name="co-mic" :class="$style.icon" />
      </button>
      <div :class="$style.inputText">
        <p
          contenteditable="true"
          role="textbox"
          spellcheck="true"
          tabindex="0"
          data-lexical-editor="true"
          @keydown="handleKeyDown"
          @keyup="handleChange"
          @keydown.enter.prevent
          ref="iput"
        ></p>
        <p v-if="textShow" :class="$style.text">Nội dung tin nhắn</p>
      </div>
      <div :class="$style.actions">
        <button :class="$style.btn">
          <v-icon name="fa-regular-smile" :class="$style.icon" />
        </button>
      </div>
    </div>
    <button :class="$style.sendBtn" :disabled="enableSendBtn" @click="submit">
      <SendIcon :class="$style.icon" />
    </button>
  </div>
</template>
<style lang="scss" module>
.box {
  display: flex;
  width: 100%;
  background: #e6e5e6;
  border-radius: 10px;
  padding: 4px;

  .mic {
    border: 0;
    background: transparent;
    .icon {
      width: 30px;
      height: 30px;
      color: #777;
    }

    &:hover {
      .icon {
        color: #ec532a;
      }
    }
  }

  .hide {
    // transition: 0.3s;
    visibility: hidden;
    // display: none;
    width: 10px;
  }
  //   justify-content: space-between;
  .input {
    flex: 1;
    width: 100px;
    // height: 40px;
    // background: #fff;
    display: flex;
    // align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    // flex-direction: row-reverse;
    user-select: text;
    white-space: pre-wrap;
    word-break: break-word;
    // border: 1px solid #ddd;
    border-radius: 20px;

    .inputText {
      position: relative;
      // width: 100%;
      flex: 1;
      p {
        position: relative;
        z-index: 1;
        // display: inline-flex;
        // align-items: center;
        // width: inherit;
        min-height: 40px;
        outline: none;
        // line-height: 26px;
        transform: translateY(1px);
        padding: 8px 20px 8px 4px;
      }

      .text {
        z-index: 0;
        position: absolute;
        color: #888;
        top: 0;
      }
    }

    // text-align: right;

    .actions {
      height: 40px;
      display: flex;
      align-items: center;

      .btn {
        border: 0;
        background: none;
        .icon {
          width: 28px;
          height: 28px;
          color: #888;
        }
      }
    }
  }

  .sendBtn {
    width: 40px;
    height: 40px;
    border-radius: 50em;
    border: 0;
    color: #888;
    margin-left: 10px;
    // background: #ec542a2f;
    background: transparent;
    display: flex;
    align-items: center;
    .icon {
      width: 24px;
      height: 24px;
      color: #ec532a;
    }
  }

  .sendBtn[disabled] {
    .icon {
      color: #999;
    }
  }
}
</style>
