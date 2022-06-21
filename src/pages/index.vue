<script setup>
import DesktopLayout from "@/components/layout/Desktop.vue";
import Sidebar from "../components/Sidebar.vue";
import ChatMain from "../components/ChatMain.vue";
// import FriendSideBar from "../components/FriendSideBar.vue";
// import FriendMain from "../components/FriendMain.vue";
import { useHead } from "@vueuse/head";

useHead({
  // Can be static or computed
  title: "Tin nhắn",
  // meta: [
  //   {
  //     name: `description`,
  //     content: computed(() => siteData.description),
  //   },
  // ],
});
</script>
<template>
  <!-- <AppProvider> -->
  <DesktopLayout>
    <template #sidebar>
      <Sidebar />
    </template>
    <template #body>
      <ChatMain />
    </template>
  </DesktopLayout>
  <!-- </AppProvider> -->
</template>
