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
    });
  }
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
