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
  ref,
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
  auth,
  onAuthStateChanged,
  orderBy,
} from "@/firebase/config";
import { useRouter, useRoute } from "vue-router";
//
const router = useRouter();
const route = useRoute();
const chatStore = useChatStore();
const userStore = useUserStore();
const userApp = useAppStore();
const userInfo = computed(() => userStore.getUserinfo);
const userId = computed(() => userInfo.value.uid);
const chatList = reactive({ data: [] });
const login = ref(false);

chatStore.$reset();
userStore.$reset();
userApp.$reset();

// kiem tra trang thai dang nhap

watchEffect(() => {
  onAuthStateChanged(auth, (user) => {
    // console.log(user);
    if (!user) {
      router.push({ path: "/login" });
      login.value = false;
    } else {
      // set user info to state
      console.log("da dang nhap");
      login.value = true;
      userStore.setUserInfo(user);
      if (route.name === "login" || route.name === "register") {
        router.push({ path: "/" });
      }
    }
  });
});

async function getNotifications() {
  console.log(userInfo.value.uid);
  console.log("thong bao dang chay");
  if (userInfo.value.uid) {
    const collectionRef = collection(db, "notifications");
    const q = query(
      collectionRef,
      where("uidReceive", "==", userInfo.value.uid)
      // orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      watch(userInfo, () => {
        unsubscribe();
        console.log("da huy snapshot thong bao");
        getNotifications();
      });

      console.log("da bat dau snapshot thong bao");

      let noificationsList = [];
      // bi loi khong xoa thong bao tren giao dien nen buoc xoa tat ca truoc khi snapshot
      userApp.setNotifications(noificationsList);

      querySnapshot.forEach(async (document) => {
        console.log("du lieu: ", document.data());
        noificationsList.push(document.data());
        userApp.setNotifications(noificationsList);
      });
    });
  }
}

// sua loi goi lay list chat nhieu lan
// ham nay co van de (chua fix)
async function getChatListChat() {
  if (userInfo.value.uid) {
    const collectionRef = collection(db, "chats");
    const q = query(
      collectionRef,
      where("members", "array-contains", userInfo.value.uid)
    );
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
        chatList.data = newData;
      });
      // console.log(newData);

      // da thay doi cau truc database nen khong can cai nay
      // console.log(chatList.data);
      // chatList.data.forEach(async (user) => {
      //   const uid = user.members.find((mem) => mem !== userInfo.value.uid);
      //   // console.log(uid);
      //   const res = await getUser("users", uid);
      //   userStore.addUser(res);
      //   user.friendInfo = res;
      //   // console.log(user);
      //   // console.log(chatList.data);
      //   console.log("da cap nhat chat list");
      // });
    });
  }
}

//

async function getUserFriends() {
  console.log(userInfo.value.uid);

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

// fix snapshot lai nhieu lan khong mong muon
// loi watch van bi lap lai khong mong muon
// fix tam bang cac dat bien tam de so sanh khi watch chay
const currentChatId = computed(() => chatStore.getCurrentChatId);

let tempCurrentChatId = "";
async function watchChatModify() {
  const ff = collection(db, "messages");
  const ee = query(ff, where("chatId", "==", currentChatId.value));
  const eee = await getDocs(ee);

  const unsubscribe = onSnapshot(ee, (eee) => {
    watch(currentChatId, (n) => {
      // console.log({ n, tempCurrentChatId });
      if (n !== tempCurrentChatId) {
        tempCurrentChatId = n;
        console.log("da unsubscribe watch chat");
        console.log("da watch lai chat ");
        unsubscribe();
        watchChatModify();
      }
    });

    // let mess
    eee.forEach(async (document) => {
      // console.log("--------------------------------");
      // console.log(document.data());
      const pop = document.get("chatData")?.pop();
      const chatId = document.get("chatId");
      const theme = document.get("theme");
      const id = document.get("chatId");
      // console.log(pop?.createdAt);
      // console.log(currentChatId.value);
      // console.log("theo doi tin nhan hard code trong AppProvider");
      // console.log(pop);
      // console.log(id);
      if (pop?.type === "theme") {
        chatStore.setThemeById(id, theme);
      }
      chatStore.addChatDataContent({ chatId, pop });
      //   friends.data = document.data();
    });
  });
};

// goi lan dau khi khoi chay
getNotifications();
watchChatModify();
getUserFriends();
getChatListChat();

// theo doi su thay doi va goi lai khi lan dau that bai
watch(userInfo, (n) => {
  getUserFriends();
  getNotifications();
  getChatListChat();
});

watch(chatList, (n) => {
  // console.log(n);
  chatStore.addChatList(n.data);
});
</script>
<template>
  <slot></slot>
</template>
