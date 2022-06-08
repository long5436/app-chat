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
  increment,
} from "./config";

const addDocument = async (collectionName, data) => {
  console.log(data);
  addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });

  addDoc(collection(db, "messages"), {
    chatId: data.id,
    name: data.name,
    chatData: [],
    createdAt: serverTimestamp(),
  });
};

const addFiend = async (collectionName, currentUser, newFriend) => {
  const add = async (document, data) => {
    const documentRef = doc(db, "users", document.id);
    await updateDoc(documentRef, { friends: arrayUnion(data) });
  };

  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("uid", "==", currentUser.uid));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (document) => {
    add(document, newFriend);
  });

  // add current user to list friends of new friend
  const collectionRef2 = collection(db, collectionName);
  const q2 = query(collectionRef, where("uid", "==", newFriend.uid));
  const querySnapshot2 = await getDocs(q2);

  querySnapshot2.forEach(async (document) => {
    add(document, {
      displayName: currentUser.username,
      photoURL: currentUser.photo,
      uid: currentUser.uid,
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
    where("members", "array-contains", currentUserUid)
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

export { addDocument, addFiend, getUser, getChat, getChatLists, sendMessage };
