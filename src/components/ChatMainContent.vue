<script setup>
import avt from "@/assets/img/av2.jpg";
import InputChatForm from "./InputChat.vue";
import ChatMainMenu from "./ChatMainMenu.vue";
import ChatView from "./ChatView.vue";
import createAvtString from "@/plugins/createAvtString";
import Bg1 from "@/assets/img/bg-theme-1.png";
import Bg from "@/assets/img/bg-theme-2.png";
import Bg3 from "@/assets/img/bg-theme-3.jpg";
import Bg4 from "@/assets/img/bg-theme-4.png";

//
import { useChatStore } from "@/stores/chat";
import { useAppStore } from "@/stores/app";
import { watch, computed } from "vue";
const chatStore = useChatStore();
const appStore = useAppStore();
const currentChatUser = computed(() => chatStore.getCurrentChatUser);

//
const currentTheme = computed(() => chatStore.getTheme);
// console.log(currentTheme);

const background = computed(() => {
  switch (currentTheme.value?.id) {
    case 0:
      return null;
    case 1:
      return `url(${Bg1})`;

    case 2:
      return `url(${Bg})`;
    case 3:
      return `url(${Bg3})`;
    case 4:
      return `url(${Bg4})`;
    default:
      return null;
  }
});
</script>

<template>
  <div :class="$style.chatTheme" :style="{ backgroundImage: background }">
    <div :class="$style.header">
      <div :class="$style.wrapper">
        <div :class="$style.user">
          <div :class="$style.info">
            <img
              v-if="currentChatUser.photoURL"
              :src="currentChatUser.photoURL || avt"
              alt=""
              :class="$style.avt"
            />
            <div
              v-else
              :class="$style.avtName"
              :style="{
                background: currentChatUser.theme?.backgroundColor,
                color: currentChatUser.theme?.textColor,
              }"
            >
              <span>{{
                createAvtString(currentChatUser.displayName).name
              }}</span>
            </div>
            <h3 :class="$style.username">
              {{ currentChatUser.displayName }}
            </h3>
          </div>
        </div>
        <div>
          <ChatMainMenu />
        </div>
      </div>
    </div>
    <div :class="$style.body">
      <div :class="$style.wrapper">
        <div :class="$style.content">
          <div :class="$style.messages">
            <ChatView :data="currentChatUser" />
          </div>
          <div :class="$style.inputChat">
            <InputChatForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
.chatTheme {
  position: relative;
  // background-image: url("@/assets/img/bg-theme-2.png");
  z-index: 0;

  &::before {
    // content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
}

.header {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.219);
  backdrop-filter: blur(20px);
  z-index: 1;

  .wrapper {
    height: inherit;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user {
    .info {
      display: flex;
      align-items: center;
      .avt {
        width: 38px;
        height: 38px;
        border-radius: 50em;
        margin-right: 10px;
      }

      .avtName {
        display: flex;
        width: 38px;
        height: 38px;
        border-radius: 50em;
        margin-right: 10px;
        background: #ddd;
        span {
          margin: auto;
          font-size: 1.3rem;
          transform: translateY(-1px);
        }
      }
    }
  }
}

.body {
  .wrapper {
    margin: 0 20px;
    position: relative;
    height: calc(100vh - 90px);
    .content {
      position: absolute;
      inset: 0;
      flex-direction: column;
      height: 100%;
      display: flex;

      .messages {
        flex: 1;
        overflow: hidden;
      }

      .inputChat {
        // height: 80px;
        // border-top: 1px solid #ddd;
        padding: 20px 0;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
