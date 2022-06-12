<script setup>
import { useChatStore } from "@/stores/chat";
import { watch, computed } from "vue";
const chatStore = useChatStore();
const currentChatUser = computed(() => chatStore.getCurrentChatUser);

import ChatMainContent from "./ChatMainContent.vue";
import ChatMainWelcome from "./ChatMainWelcome.vue";
</script>
<template>
  <div :class="$style.chatMain">
    <component
      :is="currentChatUser.displayName ? ChatMainContent : ChatMainWelcome"
    ></component>
  </div>
</template>
<style lang="scss" module>
.chatMain {
  height: 100%;
}
</style>
