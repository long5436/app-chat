<script setup>
import avt from "@/assets/img/av2.jpg";
import InputChatForm from "./InputChat.vue";
import ChatView from "./ChatView.vue";
import { watch, computed } from "vue";
import { useChatStore } from "@/stores/chat";
import createAvtString from "@/plugins/createAvtString";

//
const chatStore = useChatStore();
const currentChatUser = computed(() => chatStore.getCurrentChatUser);

// console.log(currentChatUser.value);

// watch(currentChatUser, (n) => {
//   console.log(n);
//   // chatStore.addChats(n.chatData);
// });
</script>

<template>
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
            :class="$style.avtName"
            :style="{
              background: currentChatUser.theme?.backgroundColor,
              color: currentChatUser.theme?.textColor,
            }"
          >
            <span>{{ createAvtString(currentChatUser.displayName).name }}</span>
          </div>
          <h2 :class="$style.username">
            {{ currentChatUser.displayName }}
          </h2>
        </div>
      </div>
      <div>
        <button :class="$style.btn">
          <v-icon name="ri-search-2-line" :class="$style.icon" />
        </button>
      </div>
    </div>
  </div>
  <div :class="$style.body">
    <div :class="$style.wrapper">
      <div :class="$style.content" v-if="currentChatUser.displayName">
        <div :class="$style.messages">
          <ChatView :data="currentChatUser" />
        </div>
        <div :class="$style.inputChat">
          <InputChatForm />
        </div>
      </div>
      <div :class="$style.content" v-else>
        <h2>Khong co gi o day</h2>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
.header {
  position: relative;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ddd;
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
        width: 50px;
        height: 50px;
        border-radius: 50em;
        margin-right: 10px;
      }

      .avtName {
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 50em;
        margin-right: 10px;
        background: #ddd;
        span {
          margin: auto;
          font-size: 1.6rem;
          transform: translateY(-1px);
        }
      }
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    height: 34px;
    border: 0;

    .icon {
      width: 30px;
      height: 26px;
      color: #777;
    }

    &:hover {
      .icon {
        color: #ec532a;
      }
    }
  }
}

.body {
  .wrapper {
    margin: 0 20px;
    position: relative;
    height: calc(100vh - 110px);
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
        border-top: 1px solid #ddd;
        padding: 20px 0;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
