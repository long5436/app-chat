<script setup>
import LoginLayout from "@/components/layout/LoginLayout.vue";
import LoginForm from "@/components/login/LoginForm.vue";
// import AppProvider from "@/service/appProvider.vue";

import { useHead } from "@vueuse/head";

useHead({
  // Can be static or computed
  title: "Đăng nhập",
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
  <LoginLayout>
    <LoginForm />
  </LoginLayout>
  <!-- </AppProvider> -->
</template>

<style></style>
