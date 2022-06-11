<template>
  <span :class="$style.overlay"></span>
  <div :class="$style.theme"></div>
</template>

<style lang="scss" module>
.theme {
  background: yellow;
  width: 400px;
  height: 400px;
  z-index: 2;
  position: fixed;
  /* margin: auto; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ddd;
  border-radius: 12px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.185);
  z-index: 1;
}
</style>
