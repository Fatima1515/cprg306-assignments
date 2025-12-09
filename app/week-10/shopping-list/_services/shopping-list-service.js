import { db } from "../../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// GET items from Firestore for a user
export async function getItems(userId) {
  const items = [];
  const q = query(collection(db, "users", userId, "items"));
  const snapshot = await getDocs(q);

  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

// ADD new item to Firestore for a user
export async function addItem(userId, item) {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
}
