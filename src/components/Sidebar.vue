<script setup>
import SearchBox from "./SearchBox.vue";
import ChatList from "./ChatList.vue";

import { onMounted, ref } from "vue";
const isMobile = ref(false);

isMobile.value = window.innerWidth <= 768 ? true : false;

onMounted(() => {
  window.addEventListener("resize", () => {
    // console.log(window);
    isMobile.value = window.innerWidth <= 768 ? true : false;
  });
});
</script>

<template>
  <h3 :class="$style.heading">
    Tin nhắn
    <!-- <v-icon name="bi-chevron-down" :class="$style.icon" /> -->
  </h3>
  <SearchBox v-if="!isMobile" />
  <ChatList />
</template>
<style lang="scss" module>
.heading {
  padding: 0 20px;
  font-size: 1.05rem;
}
</style>
