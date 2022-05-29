<script setup>
import SearchBox from "./SearchBox.vue";
import ListFriend from "./ListFriend.vue";
</script>
<template>
  <h3 :class="$style.heading">
    Bạn bè
    <v-icon name="bi-chevron-down" :class="$style.icon" />
  </h3>
  <SearchBox />
  <ListFriend />
</template>
<style lang="scss" module>
.heading {
  padding: 0 20px;
}
</style>
