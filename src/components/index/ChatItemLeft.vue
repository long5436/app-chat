<template>
  <div :class="$style.message">
    <div :class="$style.content">
      {{ content }}
      <p :class="$style.time">23:12, 12 tháng 4, 2022</p>
    </div>
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

   .time {
        margin-right: 12px;
    text-align: right;
    font-weight: bold;
    opacity: 0.5;
    font-size: 0.7rem;
  }

}
</style>