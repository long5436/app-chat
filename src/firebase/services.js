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
} from "./config";

const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
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
  console.log(uid);
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

const getChat = async (collectionName, id) => {
  // console.log(uid);
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);

  const friends = { data: [] };
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach(async (document) => {
      // console.log(document.data);
      friends.data = document.data();
    });
  });

  return friends.data;
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

export { addDocument, addFiend, getUser, getChat, getChatLists };
