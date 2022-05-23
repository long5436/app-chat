<template>
  <form @submit.prevent :class="$style.form">
    <v-icon name="ri-search-2-line" :class="$style.icon" />
    <input :class="$style.input" type="text" placeholder="Tìm kiếm" />
  </form>
</template>
<style lang="scss" module>
.form {
  margin: 10px 20px;
  display: flex;
  align-items: center;
  background: #e6e5e6;
  height: 34px;
  border-radius: 6px;
  padding: 0 8px;

  .icon {
    height: 20px;
    width: 20px;
    color: #777;
    margin-right: 4px;
  }

  .input {
    flex: 1;
    width: 100px;
    outline: none;
    border: none;
    background: transparent;
  }
}
</style>
