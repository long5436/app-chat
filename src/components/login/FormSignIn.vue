<script setup>
import PopupNotification from "@/components/PopupNotification.vue";
import { ref, computed, reactive, watch } from "vue";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase/config";
//

const passwordHide = ref(false);
const disableBtn = ref(true);
const showNotification = ref(false);
const type = computed(() => {
  return passwordHide.value ? "text" : "password";
});
const dataFrom = reactive({ email: "", password: "" });

// methods

async function submitLogin() {
  console.log(dataFrom);
  if (disableBtn) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        dataFrom.email,
        dataFrom.password
      );
      console.log(userCredential);
      const user = userCredential.user;
    } catch (error) {
      showNotification.value = true;
      dataFrom.password = "";
      dataFrom.email = "";
      setTimeout(() => {
        showNotification.value = false;
      }, 5000);
      console.log(error);
    }
  }
}

function changePasswordHide(event) {
  if (event.pointerType === "mouse") {
    passwordHide.value = !passwordHide.value;
  } else {
    submitLogin();
  }
}

// validation
watch(dataFrom, (n) => {
  if (n.password.length >= 6) {
    console.log(n.password.length);
    if (n.email) {
      disableBtn.value = false;
    } else {
      disableBtn.value = true;
    }
  } else {
    disableBtn.value = true;
  }
  console.log(disableBtn.value);
});
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
        @keydown.enter="submitLogin"
      />
    </div>
    <div :class="$style.inputBox">
      <input
        :class="$style.input"
        :type="type"
        placeholder="Mật khẩu"
        v-model="dataFrom.password"
        @keydown.enter="submitLogin"
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
      <router-link :class="$style.link" :to="{ path: '/register' }">
        Chưa có tài khoản? Đăng ký ngay
      </router-link>
    </div>
    <button
      type="submit"
      :disabled="disableBtn"
      :class="$style.btnSubmit"
      @click="submitLogin"
    >
      Đăng nhập
    </button>
  </form>
  <PopupNotification
    v-if="showNotification"
    :content="'Email hoặc mật khẩu không chính xác'"
  />
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

  .btnSubmit[disabled] {
    filter: brightness(80%);
    cursor: default;
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
