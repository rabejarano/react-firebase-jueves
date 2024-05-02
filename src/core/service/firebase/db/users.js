import { addDoc, doc, collection, getDocs } from "firebase/firestore";

async function readUsers(db) {
  const querySnapshot = await getDocs(collection(db, "users"));
  let data = querySnapshot.docs;
  let response = querySnapshot.docs.map((doc) => doc.data());
  return response;
}

async function addUser(db) {
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

export { readUsers, addUser };
