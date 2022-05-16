<script setup>
import Desktop from "../layout/Desktop.vue";
import ChatMain from "@/components/index/ChatMain.vue";
import { auth, onAuthStateChanged } from "@/firebase/config";

import { useRouter } from "vue-router";

const router = useRouter();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    router.push({ path: "/login" });
  }
});
</script>
<template>
  <Desktop>
    <ChatMain />
  </Desktop>
</template>
