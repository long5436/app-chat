<template>
  <div :class="$style.message">
    <span :class="$style.content">
      {{ content }}
    </span>
  </div>
</template>

<script setup>
//
const props = defineProps(["content"]);
</script>

<style lang="scss" module>
.message {
  display: flex;
  justify-content: flex-start;
  margin: 6px 0;
  .content {
    position: relative;
    display: inline-block;
    max-width: 400px;
    background: #e4e4e4;
    padding: 12px;
    border-radius: 10px;
  }

}
</style>