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
const userId = computed(() => userInfo.value.uid);
const chatList = reactive({ data: [] });

chatStore.$reset();
userStore.$reset();
userApp.$reset();

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

// watchEffect(async () => {
//   if (userInfo.value.uid) {
//     const collectionRef = collection(db, "chats");
//     const q = query(
//       collectionRef,
//       where("members", "array-contains", userInfo.value.uid)
//     );
//     const querySnapshot = await getDocs(q);
//     let data = [];

//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       let newData = [];
//       querySnapshot.forEach(async (document) => {
//         newData.push(document.data());
//         // return document.data();
//       });
//       // console.log(newData);
//       chatList.data = newData;

//       chatList.data.forEach(async (user) => {
//         const uid = user.members.find((mem) => mem !== userInfo.value.uid);
//         // console.log(uid);
//         const res = await getUser("users", uid);
//         userStore.addUser(res);
//         user.friendInfo = res;
//         // console.log(user);
//         // console.log(chatList.data);
//         console.log("da cap nhat chat list");
//       });
//     });
//   }
// });

// sua loi goi lay list chat nhieu lan
async function getChatListChat() {
  watch(userId, async (uid) => {
    const collectionRef = collection(db, "chats");
    const q = query(collectionRef, where("members", "array-contains", uid));
    const querySnapshot = await getDocs(q);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      watch(userInfo, () => {
        console.log("da unsubscribe list chat");
        unsubscribe();
        getChatListChat();
      });

      let newData = [];
      querySnapshot.forEach(async (document) => {
        newData.push(document.data());
        // console.log(document.data());
        // return document.data();
      });
      // console.log(newData);
      chatList.data = newData;

      chatList.data.forEach(async (user) => {
        const uid = user.members.find((mem) => mem !== userInfo.value.uid);
        // console.log(uid);
        const res = await getUser("users", uid);
        userStore.addUser(res);
        user.friendInfo = res;
        // console.log(user);
        // console.log(chatList.data);
        console.log("da cap nhat chat list");
      });
    });
  });

  // const collectionRef = collection(db, "chats");
  // const q = query(collectionRef, where("members", "array-contains", userId.value));
  // const querySnapshot = await getDocs(q);

  // console.log(querySnapshot);

  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   watch(userInfo, () => {
  //     console.log("da unsubscribe list chat");
  //     unsubscribe();
  //     getChatListChat();
  //   });

  //   let newData = [];
  //   querySnapshot.forEach(async (document) => {
  //     newData.push(document.data());
  //     console.log(document.data());
  //     // return document.data();
  //   });
  //   // console.log(newData);
  //   chatList.data = newData;

  //   chatList.data.forEach(async (user) => {
  //     const uid = user.members.find((mem) => mem !== userInfo.value.uid);
  //     // console.log(uid);
  //     const res = await getUser("users", uid);
  //     userStore.addUser(res);
  //     user.friendInfo = res;
  //     // console.log(user);
  //     // console.log(chatList.data);
  //     console.log("da cap nhat chat list");
  //   });
  // });
}

getChatListChat(); // goi lan dau

//
watch(userInfo, (n) => {
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
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      watch(userInfo, () => {
        console.log("da huy list friend");
        unsubscribe();
        getUserFriends();
      });

      querySnapshot.forEach(async (document) => {
        // console.log(document.data());
        //   friends.data = document.data();
        userApp.addListFriend(document.data().friends);
        console.log("Da cap nhat list friend");
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

// hard code

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const currentChatId = computed(() => chatStore.getCurrentChatId);
// console.log(currentChatId.value);

// watchEffect(async () => {
//   const ff = collection(db, "messages");
//   const ee = query(ff, where("chatId", "==", currentChatId.value));
//   const eee = await getDocs(ee);

//   let unsubscribe = onSnapshot(ee, (eee) => {
//     watch(currentChatId, (n) => {
//       // console.log("da unsubscribe");
//       unsubscribe();
//     });

//     // let mess
//     eee.forEach(async (document) => {
//       // console.log("--------------------------------");
//       // console.log(document.get("chatData")?.pop());
//       const pop = document.get("chatData")?.pop();
//       const chatId = document.get("chatId");
//       // console.log(pop?.createdAt);
//       // console.log(currentChatId.value);
//       // console.log("theo doi tin nhan hard code trong AppProvider");
//       chatStore.addChatDataContent({ chatId, pop });
//       //   friends.data = document.data();
//     });
//   });
// });

// fix snapshot lai nhieu lan khong mong muon
async function watchChatModify() {
  const ff = collection(db, "messages");
  const ee = query(ff, where("chatId", "==", currentChatId.value));
  const eee = await getDocs(ee);

  let unsubscribe = onSnapshot(ee, (eee) => {
    watch(currentChatId, (n) => {
      console.log("da unsubscribe watch chat");
      console.log("da watch lai chat ");
      unsubscribe();
      watchChatModify();
    });

    // let mess
    eee.forEach(async (document) => {
      // console.log("--------------------------------");
      // console.log(document.get("chatData")?.pop());
      const pop = document.get("chatData")?.pop();
      const chatId = document.get("chatId");
      const theme = document.get("theme");
      // console.log(pop?.createdAt);
      // console.log(currentChatId.value);
      // console.log("theo doi tin nhan hard code trong AppProvider");
      chatStore.addChatDataContent({ chatId, pop });
      userApp.setTheme(theme);
      //   friends.data = document.data();
    });
  });
}

// goi lan dau khi khoi chay
watchChatModify();
</script>
<template>
  <slot></slot>
</template>
