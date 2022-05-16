<script setup>
import FormSignIn from "./FormSignIn.vue";
import SignInWith from "./SignInWith.vue";
</script>
<template>
  <div :class="$style.loginForm">
    <FormSignIn />
    <p :class="$style.orLogin">Hoặc đăng nhập với</p>
    <SignInWith />
  </div>
</template>
<style lang="scss" module>
.loginForm {
  max-width: 480px;
  width: 100%;
  border: 2px solid #fff;
  padding: 20px;
  background: rgba(205, 198, 239, 0.2);
  border-radius: 22px;
}

.orLogin {
  text-align: center;
  padding: 20px 0;
}
</style>
