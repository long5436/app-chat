<script setup>
import SearchBox from "./SearchBox.vue";
import ListFriend from "./ListFriend.vue";

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
    Bạn bè
    <v-icon name="bi-chevron-down" :class="$style.icon" v-if="false" />
  </h3>
  <SearchBox v-if="!isMobile" />
  <ListFriend />
</template>
<style lang="scss" module>
.heading {
  padding: 0 20px;
}
</style>
