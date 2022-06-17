<script setup>
import { ref, computed, reactive, watch } from "vue";
import { auth, createUserWithEmailAndPassword } from "../../firebase/config";
import { updateProfile } from "firebase/auth";
import { addDocument } from "@/firebase/services";
import createColor from "@/plugins/createColor";
//

const passwordHide = ref(false);
const type = computed(() => {
  return passwordHide.value ? "text" : "password";
});
const dataFrom = reactive({ email: "", password: "", name: "" });
const passwordCheck = ref("");
const btnSubmit = ref(false);

// hooks
watch(passwordCheck, (n) => {
  validation(n, dataFrom.password);
});

watch(dataFrom, (n) => {
  validation(n.password, passwordCheck.value);
});

// methods

function validation(valueFirst, valueSecond) {
  if (valueFirst === valueSecond) {
    if (dataFrom.password.length < 6) {
      btnSubmit.value = false;
    } else if (dataFrom.email && dataFrom.name) {
      btnSubmit.value = true;
    } else {
      btnSubmit.value = false;
    }
  } else {
    btnSubmit.value = false;
  }
}

async function submitForm() {
  console.log(dataFrom);
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    dataFrom.email,
    dataFrom.password
  );
  // const user = userCredential.user;
  await updateProfile(auth.currentUser, {
    displayName: dataFrom.name,
    photoURL: "",
  });

  console.log(userCredential.user);
  const user = userCredential.user;
  addDocument("users", {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid,
    providerId: user.providerId,
    friends: [],
    theme: createColor(),
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
        type="text"
        placeholder="Tên bạn"
        v-model="dataFrom.name"
        required
      />
    </div>
    <div :class="$style.inputBox">
      <input
        :class="$style.input"
        type="email"
        placeholder="Email"
        v-model="dataFrom.email"
        required
      />
    </div>
    <div :class="$style.inputBox">
      <input
        :class="$style.input"
        :type="type"
        placeholder="Mật khẩu"
        v-model="dataFrom.password"
        required
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
    <div :class="$style.inputBox">
      <input
        :class="$style.input"
        :type="type"
        placeholder="Nhập lại mật khẩu"
        v-model="passwordCheck"
        required
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
      <router-link :class="$style.link" :to="{ path: '/login' }">
        Quay lại đăng nhập
      </router-link>
    </div>
    <button
      :class="$style.btnSubmit"
      :disabled="!btnSubmit"
      @click="submitForm"
    >
      Đăng ký
    </button>
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
