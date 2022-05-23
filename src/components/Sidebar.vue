<script setup>
import SearchBox from "./SearchBox.vue";
import ChatList from "./ChatList.vue";
</script>

<template>
  <h3 :class="$style.heading">
    Tin nhắn
    <v-icon name="bi-chevron-down" :class="$style.icon" />
  </h3>
  <SearchBox />
  <ChatList />
</template>
<style lang="scss" module>
.heading {
  padding: 0 20px;
}
</style>
