<template>
  <div :class="$style.message">
    <button :class="$style.btnStaple">
      <IconStaple :class="$style.icon" />
    </button>
    <div :class="$style.input">
      <input
        type="text"
        placeholder="Nhập tin nhắn"
        @keyup.enter="sendMessage"
        v-model="text"
      />
      <button :class="$style.emoji">
        <IconSmile :class="$style.icon" />
      </button>
    </div>
    <button :class="$style.btn" @click="sendMessage">
      <IconSend :class="$style.icon" />
    </button>
  </div>
</template>

<script setup>
import IconSend from "@/components/icons/Send.vue";
import IconSmile from "@/components/icons/Smile.vue";
import IconStaple from "@/components/icons/Staple.vue";
import { ref, watch } from "vue";
import { chatStore } from "@/stores/counter";

//
const text = ref("");
const store = chatStore();

// hooks
watch(text, (newValue) => store.setChatInput(newValue));

// methods

function sendMessage() {
  if (text.value) {
    console.log(text.value);
    store.addhatInput(text.value);
    text.value = "";
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" module>
.message {
  //   position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  margin-top: 24px;
  //   background: #000;
  //   border-top: 1px solid #eee;
  display: flex;
  // overflow: hidden;

  .input {
    flex: 1;
    display: flex;
    margin: 4px;
    background: #eee;
    border-radius: 20px;
    align-items: center;
    input {
      flex: 1;
      font-size: 1.1rem;
      outline: 0;
      border: 0;
      background: transparent;
      padding-left: 16px;
    }

    .emoji {
      border: 0;
      background: transparent;
      padding: 0 12px;
      color: #888;
      transform: translateY(1px);
    }
  }

  .btnStaple {
    margin: 4px;
    border: 0;
    background: transparent;
    .icon {
      fill: #888;
      width: 24px;
      height: 24px;
    }
  }

  .btn {
    // width: 20;
    width: 42px;
    border: 0;
    background: #ffd2da;
    border-radius: 50%;
    margin: 4px;
    .icon {
      width: 20px;
      height: 20px;
      fill: #fff;
      //   transform: rotate(45deg);
    }

    &:hover {
      cursor: pointer;
      background: #df8999;
    }
  }
}
</style>