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
} from "./config";

const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });
};

const addFiend = async (collectionName, userUid, newFriend) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("uid", "==", userUid));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (document) => {
    // updateDocuments(document);
    // console.log(document);
    const documentRef = doc(db, "users", document.id);

    await updateDoc(documentRef, { friends: arrayUnion(newFriend) });
  });
};

const getUser = async (collectionName, uid) => {
  console.log(uid);
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  const friends = { data: [] };
  querySnapshot.forEach(async (document) => {
    console.log(document.data);
    friends.data = document.data();
  });

  return friends.data;
};

export { addDocument, addFiend, getUser };
