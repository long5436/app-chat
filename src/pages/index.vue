<script setup>
import DesktopLayout from "@/components/layout/Desktop.vue";
import Sidebar from "../components/Sidebar.vue";
import ChatMain from "../components/ChatMain.vue";
import FriendSideBar from "../components/FriendSideBar.vue";
import FriendMain from "../components/FriendMain.vue";
import { auth, onAuthStateChanged } from "@/firebase/config";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { useAppStore } from "../stores/app";

const userStore = useUserStore();
const appStore = useAppStore();
const router = useRouter();

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (!user) {
    router.push({ path: "/login" });
  } else {
    // set user info to state
    userStore.setUserInfo(user);
  }
});
</script>
<template>
  <DesktopLayout>
    <template #sidebar>
      <Sidebar v-if="!appStore.getPageFriend" />
      <FriendSideBar v-else />
    </template>
    <template #body>
      <ChatMain v-if="!appStore.getPageFriend" />
      <FriendMain v-else />
    </template>
  </DesktopLayout>
</template>
