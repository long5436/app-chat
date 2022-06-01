<script setup>
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";
import { getChatLists, getUser } from "@/firebase/services";
import {
  watchSyncEffect,
  watchEffect,
  reactive,
  computed,
  watch,
  onMounted,
} from "vue";
import {
  db,
  onSnapshot,
  getDocs,
  setDoc,
  doc,
  collection,
  query,
  where,
} from "@/firebase/config";
//
const chatStore = useChatStore();
const userStore = useUserStore();
const userApp = useAppStore();
const userInfo = computed(() => userStore.getUserinfo);

onMounted(async () => {
  if (userInfo.uid) {
    const data = await getChatLists("chats", userInfo.value.uid);
    const data2 = data.map((item, index) => {
      const uid = item.members.find((mem) => mem !== userInfo.value.uid);
      return { index, uid };
    });

    console.log(data);
    chatStore.addChatList(data);
  }
});

//
watch(userInfo, (n) => {
  console.log(n);
  getUserFriends();
});

async function getUserFriends() {
  if (userInfo.value.uid) {
    const collectionRef = collection(db, "users");
    const q = query(collectionRef, where("uid", "==", userInfo.value.uid));
    const querySnapshot = await getDocs(q);

    const friends = { data: [] };
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(async (document) => {
        console.log(document.data());
        //   friends.data = document.data();
        userApp.addListFriend(document.data().friends);
      });
    });
  }
  // console.log(user);
  //   watchEffect(async () => {
  //   });
}

getUserFriends();
// console.log(friends.data);
</script>
<template>
  <slot></slot>
</template>
