<script setup>
import { ref, getCurrentInstance, watch, computed } from "vue";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import { sendMessage } from "@/firebase/services";

//
const chatStore = useChatStore();
const userStore = useUserStore();
const userInfo = userStore.userinfo;
const currentChatId = computed(() => chatStore.getCurrentChatId);
const { proxy } = getCurrentInstance();
const input = ref("");
const textShow = ref("true");

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
  // console.log(input.value);
  // chatStore.addChat(input.value);
  // console.log(chatStore);
  sendMessage("messages", currentChatId.value, {
    displayName: userInfo.username,
    photoURL: userInfo.photo,
    uid: userInfo.uid,
    content: input.value,
    createdAt: new Date(),
  });
}

//

watch(input, (n) => {
  if (n.length > 0) {
    textShow.value = false;
  } else {
    textShow.value = true;
  }
});
</script>

<template>
  <div :class="$style.box">
    <div :class="$style.input">
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
        <p v-if="textShow" :class="$style.text">Tin nhắn</p>
      </div>
      <div :class="$style.actions">
        <button :class="$style.btn">
          <v-icon name="fa-regular-smile" :class="$style.icon" />
        </button>
      </div>
    </div>
    <button :class="$style.sendBtn">
      <v-icon name="io-send" :class="$style.icon" />
    </button>
  </div>
</template>
<style lang="scss" module>
.box {
  display: flex;
  width: 100%;
  //   justify-content: space-between;
  .input {
    flex: 1;
    width: 100px;
    // height: 40px;
    background: #fff;
    display: flex;
    // align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    // flex-direction: row-reverse;
    user-select: text;
    white-space: pre-wrap;
    word-break: break-word;
    border: 1px solid #ddd;
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
        padding: 8px 20px;
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
    .icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
