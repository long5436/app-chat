<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
@import "@/assets/css/app.scss";
</style>
