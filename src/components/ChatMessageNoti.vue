<script setup>
import { ref, watch } from "vue";

//
const props = defineProps(["data"]);
const text = ref("");
</script>

<template>
  <div :class="$style.chatNoti">
    <span>
      {{ data.displayName }} đã thay đổi chủ đề thành {{ data.themeName }}
    </span>
  </div>
</template>
<style lang="scss" module>
.chatNoti {
  text-align: center;
  padding: 20px 0;
  span {
    font-size: 0.8rem;
  }
}
</style>
