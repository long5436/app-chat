import { v4 as uuidv4 } from "uuid";

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
  deleteDoc,
} from "./config";

const addNotification = async (data) => {
  //   console.log(data);
  let id = uuidv4();
  id = id.replace(/\-/g, "");
  addDoc(collection(db, "notifications"), {
    ...data,
    id,
    createdAt: serverTimestamp(),
  });
};

const deleteNotification = async (id) => {
  const collectionRef = collection(db, "notifications");
  const q = query(collectionRef, where("id", "==", id));

  const querySnapshot = await getDocs(q);
  //   await deleteDoc(doc(db, "notifications", id));

  querySnapshot.forEach(async (document) => {
    // console.log(document.data());
    deleteDoc(document.ref);
  });
};

export { addNotification, deleteNotification };
