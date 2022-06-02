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
const chatList = reactive({ data: [] });

// async function getChatListsUser() {
//   if (userInfo.value.uid) {
//     const data = await getChatLists("chats", userInfo.value.uid);
//     const data2 = data.map((item, index) => {
//       const uid = item.members.find((mem) => mem !== userInfo.value.uid);
//       return { index, uid };
//     });

//     console.log(data);
//     chatStore.addChatList(data);
//   }
// }

watchEffect(async () => {
  if (userInfo.value.uid) {
    const collectionRef = collection(db, "chats");
    const q = query(
      collectionRef,
      where("members", "array-contains", userInfo.value.uid)
    );
    const querySnapshot = await getDocs(q);
    let data = [];

    onSnapshot(q, (querySnapshot) => {
      let newData = [];
      querySnapshot.forEach(async (document) => {
        newData.push(document.data());
        // return document.data();
      });
      // console.log(newData);
      chatList.data = newData;

      chatList.data.forEach(async (user) => {
        const uid = user.members.find((mem) => mem !== userInfo.value.uid);
        // console.log(uid);
        const res = await getUser("users", uid);
        user.friendInfo = {
          displayName: res.displayName,
          photoURL: res.photoURL,
          uid: res.uid,
        };
        // console.log(user);
        // console.log(chatList.data);
      });
      // data = newData;
      // console.log("chay roi");
      // console.log(data);
    });
  }
});

//
watch(userInfo, (n) => {
  console.log(n);
  getUserFriends();
});

watch(chatList, (n) => {
  // console.log(n);
  chatStore.addChatList(n.data);
});

async function getUserFriends() {
  if (userInfo.value.uid) {
    const collectionRef = collection(db, "users");
    const q = query(collectionRef, where("uid", "==", userInfo.value.uid));
    const querySnapshot = await getDocs(q);

    const friends = { data: [] };
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(async (document) => {
        // console.log(document.data());
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
// getChatListsUser();
// console.log(friends.data);
</script>
<template>
  <slot></slot>
</template>
