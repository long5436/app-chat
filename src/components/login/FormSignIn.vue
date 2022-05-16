<script setup>
import { ref, computed } from "vue";

const passwordHide = ref(false);
const type = computed(() => {
  return passwordHide.value ? "password" : "text";
});

// methods

function changePasswordHide() {
  passwordHide.value = !passwordHide.value;
}
</script>
<template>
  <form :class="$style.form" @submit.prevent>
    <h2 :class="$style.heading">Hello !</h2>
    <p :class="$style.content">Welcome to Chat app master</p>
    <div :class="$style.inputBox">
      <input
        :class="$style.input"
        type="text"
        placeholder="Email hoặc số điện thoại"
      />
    </div>
    <div :class="$style.inputBox">
      <input :class="$style.input" :type="type" placeholder="Mật khẩu" />
      <button
        @click="changePasswordHide"
        v-if="passwordHide"
        :class="$style.hidePassBtn"
      >
        <v-icon name="md-removeredeye" :class="$style.icon" />
      </button>
      <button @click="changePasswordHide" v-else :class="$style.hidePassBtn">
        <v-icon name="fa-regular-eye-slash" :class="$style.icon" />
      </button>
    </div>
    <div :class="$style.forgetPass">
      <router-link :class="$style.link" :to="{ path: '/' }">
        Quên mật khẩu
      </router-link>
    </div>
    <button :class="$style.btnSubmit">Đăng nhập</button>
  </form>
</template>

<style lang="scss" module>
.form {
  width: 100%;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;

  .heading {
    margin: 12px auto;
  }

  .content {
    width: 100%;
    padding-bottom: 12px;
    text-align: center;
  }

  .inputBox {
    display: flex;
    width: inherit;
    height: 40px;
    margin: 6px 0;
    background: #fff;
    border-radius: 6px;

    .hidePassBtn {
      border: 0;
      cursor: pointer;
      background: transparent;
      padding: 0 12px;

      .icon {
        color: #aaa;
      }
    }

    .input {
      background: transparent;
      outline: none;
      border: 0;
      width: inherit;
      height: inherit;
      font-size: 1rem;
      padding: 0 12px;
    }
  }

  .btnSubmit {
    width: 100%;
    height: 40px;
    margin: 12px 0;
    border: 0;
    border-radius: 6px;
    background: #fc6b67;
    color: #fff;
    font-weight: bold;
  }

  .forgetPass {
    width: 100%;
    text-align: right;
    padding: 12px 0;

    .link {
      color: #666;
    }
  }
}
</style>
