<template>
  <div :class="$style.menu">
    <button :class="$style.btn">
      <v-icon name="fa-user-friends" :class="$style.icon" />
    </button>
    <button :class="$style.btn">
      <v-icon name="hi-logout" :class="$style.icon" />
    </button>
  </div>
</template>

<style lang="scss" module>
.menu {
  width: 50px;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);

  .btn {
    width: 100%;
    height: 50px;
    border: 0;
    background: transparent;

    .icon {
      height: 24px;
      width: 24px;
      color: #888888;
    }

    &:hover {
      background: #ddd;
    }
  }
}
</style>
