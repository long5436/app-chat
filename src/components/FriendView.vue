<script setup>
import avt from "@/assets/img/av2.jpg";
import { watchEffect, reactive } from "vue";
import {
  db,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "@/firebase/config";

import { limit } from "firebase/firestore";

import { useUserStore } from "@/stores/user";
import { addFiend } from "@/firebase/services";
import createAvtString from "@/plugins/createAvtString";
import { computed } from "vue";

//
const userStore = useUserStore();
const data = reactive({ users: [] });
const ids = computed(() => userStore.getFriendIds);

watchEffect(async () => {
  // console.log(ids.value);

  if (ids.value) {
    const collectionRef = collection(db, "users");
    const q = query(collectionRef, orderBy("createdAt", "desc"), limit(10));
    const querySnapshot = await getDocs(q);

    onSnapshot(q, (querySnapshot) => {
      data.users = [];
      querySnapshot.forEach(async (document) => {
        // console.log(document.data());
        const a = ids.value.findIndex((e) => e === document.data().uid);
        // console.log(a);
        if (a === -1) {
          data.users.push(document.data());
        }
      });
    });
  }

  // onSnapshot(collection(db, "users"), (snapshot) => {
  //   const d = snapshot.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   data.users = d;
  //   // console.log(data);
  // });
});

// methods
async function handleAddfriend(user) {
  const newFriend = user;

  const currentUser = userStore.userinfo;

  // add friend to current user
  addFiend("users", currentUser, newFriend);
}
</script>

<template>
  <div :class="$style.heading">
    <p>Gợi ý bạn bè</p>
  </div>
  <div :class="$style.list">
    <div :class="$style.item" v-for="i in data.users" :key="i.index">
      <img
        v-if="i.photoURL"
        :src="i.photoURL ? i.photoURL : avt"
        alt=""
        :class="$style.img"
      />
      <div
        v-else
        :class="$style.avtText"
        :style="{
          background: i.theme.backgroundColor,
          color: i.theme.textColor,
        }"
      >
        <span>{{ createAvtString(i.displayName).name }}</span>
      </div>
      <h3>{{ i.displayName }}</h3>
      <button @click="handleAddfriend(i)">Kết bạn</button>
    </div>
  </div>
</template>
<style lang="scss" module>
.heading {
  padding: 12px 0;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    background: #fff;
    width: 30%;
    text-align: center;
    margin: 6px;
    padding: 24px;
    .img {
      width: 90px;
      height: 90px;
      border-radius: 50em;
    }

    .avtText {
      width: 90px;
      height: 90px;
      display: inline-flex;
      border-radius: 50rem;
      background: #ddd;
      span {
        margin: auto;
        font-size: 2rem;
      }
    }
  }
}
</style>
