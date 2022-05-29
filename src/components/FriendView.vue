<script setup>
import avt from "@/assets/img/av2.jpg";
import { watchEffect, reactive } from "vue";
import {
  db,
  onSnapshot,
  collection,
  setDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
} from "@/firebase/config";
import { useUserStore } from "@/stores/user";

//
const userStore = useUserStore();
const data = reactive({ users: [] });

watchEffect(() => {
  onSnapshot(collection(db, "users"), (snapshot) => {
    const d = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    data.users = d;
    // console.log(data);
  });
});

// methods
async function handleAddfriend(user) {
  const newFriend = {
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid,
  };

  const collectionRef = collection(db, "users");
  const q = query(collectionRef, where("uid", "==", userStore.userinfo.uid));
  const querySnapshot = await getDocs(q);

  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   updateDoc(doc, {
  //     friends: ["blabla"],
  //   });
  // });
  // const docRef = doc(db, "users", "friends");
  // console.log(docRef);
  // updateDoc(docRef, newFriend);
}
</script>

<template>
  <div :class="$style.heading">
    <p>Gợi ý bạn bè</p>
  </div>
  <div :class="$style.list">
    <div :class="$style.item" v-for="i in data.users" :key="i.index">
      <img :src="i.photoURL ? i.photoURL : avt" alt="" :class="$style.img" />
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
  }
}
</style>
