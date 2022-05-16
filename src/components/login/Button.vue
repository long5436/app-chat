<script setup>
const props = defineProps(["icon"]);
const nameIcon = props.icon === "google" ? "fc-google" : "fa-facebook";
</script>

<template>
  <button :class="$style.btn">
    <v-icon :name="nameIcon" :class="$style.icon" />
  </button>
</template>
<style lang="scss" module>
.btn {
  border: 1px solid #fff;
  background: transparent;
  border-radius: 8px;
  padding: 4px 30px;
  cursor: pointer;

  .icon {
    height: 30px;
    width: 40px;
    color: #1b74e4;
  }
}
</style>
