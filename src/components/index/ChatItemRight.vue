<template>
  <div :class="$style.message">
     
    <div :class="$style.content">
        {{ content }}
    </div>
  </div>
</template>

<script setup>
//
const props = defineProps(["content"]);
</script>

<style lang="scss" module>
.message {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 6px 0;
  .content {
    background-image: linear-gradient(to top, #ffe6d2, #ffb9c6);
    background-attachment: fixed;
    position: relative;
    display: inline-block;
    max-width: 400px;
    border-radius: 10px;
    padding: 12px;
    word-break: break-word;
  }
}
</style>
