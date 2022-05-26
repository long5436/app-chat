<script setup>
import { ref, computed, reactive } from "vue";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase/config";
//

const passwordHide = ref(false);
const type = computed(() => {
  return passwordHide.value ? "text" : "password";
});
const dataFrom = reactive({ email: "", password: "" });

// methods

function submitLogin() {
  // console.log(dataFrom);
  signInWithEmailAndPassword(auth, dataFrom.email, dataFrom.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

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
        type="email"
        placeholder="Email"
        v-model="dataFrom.email"
      />
    </div>
    <div :class="$style.inputBox">
      <input
        :class="$style.input"
        :type="type"
        placeholder="Mật khẩu"
        v-model="dataFrom.password"
      />
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
    <button :class="$style.btnSubmit" @click="submitLogin">Đăng nhập</button>
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
    cursor: pointer;

    &:hover {
      filter: brightness(95%);
    }
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
