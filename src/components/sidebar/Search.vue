<template>
  <form @submit.prevent :class="$style.searchForm">
    <IconSearch :class="$style.icon" />
    <input
      type="text"
      placeholder="Tìm kiếm tin nhắn"
      :class="$style.searchInput"
      v-model="text"
    />
    <IconXMark v-if="text" :class="$style.iconMark" @click="clearText" />
  </form>
</template>

<script setup>
import IconSearch from "@/components/icons/Search.vue";
import IconXMark from "@/components/icons/XMark.vue";
import { ref } from "vue";

const text = ref("");

// methods

function clearText() {
  text.value = "";
}
</script>

<style lang="scss" module>
.searchForm {
  display: flex;
  background: #eee;
  height: 40px;
  border-radius: 10px;
  .icon {
    color: #777;
    margin: auto 12px;
  }

  .iconMark {
    fill: #777;
    width: 12px;
    margin: 0 12px;
    cursor: pointer;
  }

  .searchInput {
    flex: 1;
    font-size: 1.1rem;
    outline: none;
    border: 0;
    background: transparent;
    // padding-right: 12px;
    overflow: hidden;
  }
}
</style>