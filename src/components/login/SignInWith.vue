<script setup>
import Button from "./Button.vue";
import {
  db,
  auth,
  facebookProvider,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
  googleProvider,
  GoogleAuthProvider,
  collection,
  doc,
  addDoc,
} from "@/firebase/config/";
import { addDocument } from "@/firebase/services";

import { useRouter } from "vue-router";
import createColor from "@/plugins/createColor";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const router = useRouter();

// methods

async function signInWithGoogle() {
  const { _tokenResponse, user } = await signInWithPopup(auth, googleProvider);
  if (_tokenResponse?.isNewUser) {
    // const usersCollectionRef = collection(db, "users");
    addDocument("users", {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      providerId: _tokenResponse.providerId,
      friends: [],
      theme: createColor(),
    });
  }
}

async function signInWithFacebook() {
  const { _tokenResponse, user } = await signInWithPopup(
    auth,
    facebookProvider
  );
  // const a = await signInWithPopup(auth, facebookProvider);
  // console.log(_tokenResponse);

  if (_tokenResponse?.isNewUser) {
    // const usersCollectionRef = collection(db, "users");
    addDocument("users", {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      providerId: _tokenResponse.providerId,
      friends: [],
      theme: createColor(),
    });
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    userStore.setUserInfo(user);
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
