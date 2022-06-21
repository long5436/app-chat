<script setup>
import DesktopLayout from "@/components/layout/Desktop.vue";
// import Sidebar from "@/components/Sidebar.vue";
// import ChatMain from "@/components/ChatMain.vue";
import FriendSideBar from "@/components/FriendSideBar.vue";
import FriendMain from "@/components/FriendMain.vue";

import { useHead } from "@vueuse/head";

useHead({
  // Can be static or computed
  title: "Bạn bè",
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
      <FriendSideBar />
    </template>
    <template #body>
      <FriendMain />
    </template>
  </DesktopLayout>
  <!-- </AppProvider> -->
</template>
