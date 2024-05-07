import {
  addDoc,
  doc,
  collection,
  getDocs,
  where,
  documentId,
  query,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

async function readUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  let response = querySnapshot.docs.map((doc) => doc.data());
  return response;
}

async function readUserById() {
  const docRef = doc(db, "collection_1/documento");
  const querySnapshot = await getDoc(docRef);
  console.log("querySnapshot.docs", querySnapshot.get());
  return null;
}

async function getDocument(coll, id) {
  const docRef = doc(db, coll, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();
  else return null;
}

async function addUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { readUsers, addUser, readUserById };
