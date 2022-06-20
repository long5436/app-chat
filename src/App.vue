<script setup>
import { RouterView } from "vue-router";
import AppProvider from "@/service/appProvider.vue";
import { VueChatEmojiComponent } from "@nguyenvanlong/vue3-chat-emoji";

// import { useScreen, useGrid } from "vue-screen";
// const screen = useScreen();
// console.log(screen);
</script>

<template>
  <AppProvider>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </AppProvider>
</template>

<style lang="scss">
@import "@/assets/css/app.scss";
</style>
