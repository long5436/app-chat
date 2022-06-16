import { storage } from "@/firebase/config";
import { async } from "@firebase/util";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

// 'file' comes from the Blob or File API

const uploadImage = async (file) => {
  const ext = file.name.split(".").pop();
  const name = uuidv4() + "." + ext;

  const storageRef = ref(storage, `images/${name}`);

  const snapshot = await uploadBytes(storageRef, file);
  const data = snapshot.ref;
  const fullPath = data.fullPath;
  const url = await getDownloadURL(ref(storage, fullPath));

  //   console.log(url);
  return url;
};

export { uploadImage };
