import { async } from "@firebase/util";
import {
  db,
  addDoc,
  serverTimestamp,
  collection,
  arrayUnion,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  onSnapshot,
  orderBy,
  increment,
} from "./config";

const addDocument = async (collectionName, data) => {
  console.log(data);
  addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });

  if (collectionName === "chats") {
    addDoc(collection(db, "messages"), {
      chatId: data.id,
      name: data.name,
      chatData: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
};

const getChatDocument = async (currentUserUid, newUserUid) => {
  console.log();
  const collectionRef = collection(db, "chats");
  const q = query(
    collectionRef,
    where("id", "in", [
      currentUserUid + newUserUid,
      newUserUid + currentUserUid,
    ])
  );

  const querySnapshot = await getDocs(q);

  let data;
  querySnapshot.forEach(async (doc) => {
    data = doc.data();
  });
  return data;
};

const addFiend = async (collectionName, currentUser, newFriend) => {
  console.log({ collectionName, currentUser, newFriend });

  const add = async (document, data) => {
    console.log(document, data);
    if (data) {
      const documentRef = doc(db, "users", document.id);
      await updateDoc(documentRef, { friends: arrayUnion(data) });
    }
  };

  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("uid", "==", currentUser.uid));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (document) => {
    add(document, {
      displayName: newFriend.displayName,
      photoURL: newFriend.photoURL,
      uid: newFriend.uid,
      theme: newFriend.theme,
    });
  });

  // add current user to list friends of new friend
  const collectionRef2 = collection(db, collectionName);
  const q2 = query(collectionRef, where("uid", "==", newFriend.uid));
  const querySnapshot2 = await getDocs(q2);

  console.log("da chay den day");

  querySnapshot2.forEach(async (document) => {
    console.log(newFriend);
    add(document, {
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      uid: currentUser.uid,
      theme: currentUser.theme,
    });
  });
};

const getUser = async (collectionName, uid) => {
  // console.log(uid);
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  let data = {};
  querySnapshot.forEach(async (document) => {
    data = document.data();
  });
  // console.log(data);
  return data;
};

const getChat = async (id) => {
  // console.log(uid);
  const collectionRef = collection(db, "messages");
  const q = query(collectionRef, where("chatId", "==", id));
  const querySnapshot = await getDocs(q);

  const chats = { data: {} };
  querySnapshot.forEach(async (document) => {
    // console.log(document.data);
    chats.data = document.data();
  });

  return chats.data;
};

// get add chat list of current user
const getChatLists = async (collectionName, currentUserUid) => {
  // const d = onSnapshot(collection(db, "users"), (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });

  const collectionRef = collection(db, collectionName);
  const q = query(
    collectionRef,
    where("members", "array-contains", currentUserUid),
    orderBy("updatedAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  let data = [];

  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach(async (document) => {
      data.push(document.data());
      console.log(document.data());
      return document.data();
    });
  });

  return data;
};

const sendMessage = async (collectionName, currentChatId, message) => {
  console.log(currentChatId, message);

  const add = async (document, data) => {
    const documentRef = doc(db, collectionName, document.id);
    await updateDoc(documentRef, {
      chatData: arrayUnion(data),
      updatedAt: serverTimestamp(),
    });
  };

  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("chatId", "==", currentChatId));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (document) => {
    console.log(document.data());
    add(document, message);
  });
};

const setTheme = async (chatId, theme) => {
  // console.log(chatId, { ...theme, preview: false });

  const add = async (document, data) => {
    const documentRef = doc(db, "messages", document.id);
    await updateDoc(documentRef, {
      theme: { ...data, preview: false },
      updatedAt: serverTimestamp(),
    });
  };

  const collectionRef = collection(db, "messages");
  const q = query(collectionRef, where("chatId", "==", chatId));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (document) => {
    // console.log(document.data());
    add(document, theme);
  });
};

export {
  addDocument,
  addFiend,
  getUser,
  getChat,
  getChatLists,
  sendMessage,
  getChatDocument,
  setTheme,
};
