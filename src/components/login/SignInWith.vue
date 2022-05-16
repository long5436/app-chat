<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div :class="$style.comboButton">
    <Button :icon="'google'" />
    <Button />
  </div>
</template>

<style lang="scss" module>
.comboButton {
  display: flex;
  justify-content: space-around;
  position: relative;
}
</style>
