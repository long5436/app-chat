<script setup>
import { ref, getCurrentInstance, watch, computed, onUpdated } from "vue";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import { sendMessage } from "@/firebase/services";
import SendIcon from "@/components/icons/send.vue";
import ChatEmoji from "./ChatEmoji.vue";

import {
  collection,
  db,
  query,
  arrayUnion,
  getDocs,
  where,
  updateDoc,
  storage,
} from "@/firebase/config";

import { uploadImage } from "@/firebase/uploadImage";
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
const sourceImg = ref("");
const openEmoji = ref(false);

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

function submit() {
  if (sourceImg.value) {
    sendImage();
  } else if (input.value) {
    sendMessage("messages", currentChatId.value, {
      displayName: userInfo.value.displayName,
      photoURL: userInfo.value.photoURL,
      uid: userInfo.value.uid,
      content: input.value,
      createdAt: new Date(),
      theme: userInfo.value.theme,
    });

    const el = proxy.$refs.iput;

    if (el) el.innerText = "";
    input.value = "";
  }

  openEmoji.value = false;
}

let file;
function selectImage() {
  const el = proxy.$refs.selImg;
  el.click();

  el.addEventListener("change", (e) => {
    file = el.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      sourceImg.value = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

async function sendImage() {
  console.log(sourceImg);
  const url = await uploadImage(file);

  sendMessage("messages", currentChatId.value, {
    displayName: userInfo.value.displayName,
    photoURL: userInfo.value.photoURL,
    uid: userInfo.value.uid,
    content: `${userInfo.value.displayName} đã gửi một ảnh`,
    createdAt: new Date(),
    type: "image",
    imageURL: url,
    theme: userInfo.value.theme,
  });

  removeImg();
}

function removeImg() {
  sourceImg.value = null;
  const el = proxy.$refs.selImg;
  el.value = "";
  const storageRef = ref(storage, "some-child");

  // 'file' comes from the Blob or File API
}

function onPaste(event) {
  let items = event.clipboardData && event.clipboardData.items;
  let file = null;
  if (items && items.length) {
    //Retrieve clipboard items
    for (var i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        file = items[i].getAsFile();
      }
    }
  }
  if (!file) {
    return;
  }
  console.log(file);

  // if (el) el.innerText = "";
}

function toggleEmoji() {
  openEmoji.value = !openEmoji.value;
}

function handleEmitEmoji(data) {
  // console.log(data);
  const el = proxy.$refs.iput;
  input.value += data;

  if (el) el.innerText += data;
}

onUpdated(() => {
  // var a = document.querySelector("p[contenteditable]");
  // console.log(a);
  // not work
  // a.innerHTML = "";
});

watch(sourceImg, (n) => {
  if (n) {
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
          v-if="!sourceImg"
          contenteditable="true"
          role="textbox"
          spellcheck="true"
          tabindex="0"
          data-lexical-editor="true"
          @keydown="handleKeyDown"
          @keyup="handleChange"
          @keydown.enter.prevent
          @paste="onPaste"
          ref="iput"
        ></p>
        <p v-if="textShow" :class="$style.text">Nội dung tin nhắn</p>
        <div :class="$style.img" v-if="sourceImg">
          <div
            :class="$style.imagePreviewWrapper"
            :style="{ 'background-image': `url(${sourceImg})` }"
          ></div>
          <button :class="$style.btn" @click="removeImg">
            <v-icon name="pr-times" :class="$style.icon" />
          </button>
        </div>
      </div>
      <div :class="$style.actions">
        <button :class="$style.btn" @click="selectImage">
          <v-icon name="bi-image" :class="$style.icon" />
          <input type="file" ref="selImg" v-show="false" />
        </button>
        <button
          :class="[$style.btn, { [$style.active]: openEmoji }]"
          @click="toggleEmoji"
        >
          <v-icon name="fa-regular-smile" :class="$style.icon" />
        </button>
        <ChatEmoji v-if="openEmoji" @click-emoji="handleEmitEmoji" />
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
  align-items: center;
  width: 100%;
  background: #e6e5e6;
  border-radius: 10px;
  padding: 4px;
  background: rgba(215, 215, 215, 0.219);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 8%);
  border: 1px solid #cccccc36;

  transition: 0.3s;
  .mic {
    border: 0;
    background: transparent;
    .icon {
      width: 26px;
      height: 26px;
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
    align-items: center;
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

      .img {
        display: flex;
        align-items: center;

        .imagePreviewWrapper {
          width: 200px;
          height: 200px;
          background-size: 100px 100px;
          background-repeat: no-repeat;
          background-position: left;
        }

        .btn {
          width: 30px;
          height: 30px;
          display: flex;
          padding: 0;
          border: 0;
          background: transparent;

          .icon {
            margin: auto;
            padding: 0;
            width: 24px;
            height: 24px;
            color: #777;
          }
        }
      }
    }

    // text-align: right;

    .actions {
      position: relative;
      height: 36px;
      display: flex;
      align-items: center;

      .btn {
        border: 0;
        background: none;
        .icon {
          width: 22px;
          height: 22px;
          color: #888;
        }
      }

      .btn:hover,
      .btn.active {
        .icon {
          color: #ec532a;
        }
      }
    }
  }

  .sendBtn {
    width: 36px;
    height: 36px;
    border-radius: 50em;
    border: 0;
    color: #888;
    // margin-left: 10px;
    // background: #ec542a2f;
    background: transparent;
    display: flex;
    align-items: center;
    .icon {
      width: 20px;
      height: 20px;
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
