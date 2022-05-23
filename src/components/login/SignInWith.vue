<script setup>
import Button from "./Button.vue";
import {
  auth,
  facebookProvider,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
  googleProvider,
  GoogleAuthProvider,
} from "@/firebase/config/";

import { useRouter } from "vue-router";

const router = useRouter();

// methods

function signInWithGoogle() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function signInWithFacebook() {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      console.log(result);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    router.push({ path: "/" });
  }
});
</script>

<template>
  <div :class="$style.comboButton">
    <Button :icon="'google'" @click="signInWithGoogle" />
    <Button @click="signInWithFacebook" />
  </div>
</template>

<style lang="scss" module>
.comboButton {
  display: flex;
  justify-content: space-around;
  position: relative;
}
</style>
