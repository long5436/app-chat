<script setup>
import LoginLayout from "@/components/layout/LoginLayout.vue";
import RegisterForm from "@/components/register/RegisterForm.vue";
// import AppProvider from "@/service/appProvider.vue";

import { useHead } from "@vueuse/head";

useHead({
  // Can be static or computed
  title: "Đăng ký",
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
    <RegisterForm />
  </LoginLayout>
  <!-- </AppProvider> -->
</template>

<style></style>
