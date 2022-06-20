<script setup>
const props = defineProps(["content"]);
</script>

<template>
  <div :class="$style.pop">
    <div :class="$style.iconBox">
      <v-icon name="pr-times" :class="$style.icon" />
    </div>
    <p :class="$style.text">{{ content }}</p>
  </div>
</template>
<style lang="scss" module>
.pop {
  position: fixed;
  top: 10px;
  left: 50%;

  transform: translateX(-50%);
  height: 50px;
  // width: 100%;
  // max-width: 300px;
  background: rgba(255, 255, 255, 0.63);
  border: 1px solid #ddd;
  border-radius: 8px;

  display: flex;
  align-items: center;
  padding: 12px;

  .iconBox {
    background: #fc6b67;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;

    .icon {
      margin: auto;
      color: #fff;
    }
  }

  .text {
    line-height: 30px;
    margin-left: 10px;
  }
}
</style>
