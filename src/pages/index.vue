<script setup>
import DesktopLayout from "@/components/layout/Desktop.vue";
import Sidebar from "../components/Sidebar.vue";
import ChatMain from "../components/ChatMain.vue";
import { auth, onAuthStateChanged } from "@/firebase/config";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
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
      <Sidebar />
    </template>
    <template #body>
      <ChatMain />
    </template>
  </DesktopLayout>
</template>
