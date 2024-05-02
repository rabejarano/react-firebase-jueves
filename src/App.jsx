import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { readUsers, addUser } from "./core/service/firebase/db/users";
import { db } from "./core/service/firebase/firebase";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getUsersCallBack();
  }, []);

  let getUsersCallBack = async () => {
    let response = await readUsers(db);
    console.log("response ", response);
  };

  return (
    <>
      <button onClick={() => addUser(db)}>Añadir Caracter</button>
    </>
  );
}

export default App;
