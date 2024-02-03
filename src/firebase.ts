import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXoWOCBDQBYLqKtz7KvsICmoNvHqfYipg",
  authDomain: "discord-clone-u.firebaseapp.com",
  projectId: "discord-clone-u",
  storageBucket: "discord-clone-u.appspot.com",
  messagingSenderId: "770981931357",
  appId: "1:770981931357:web:4b1524e77dc988715ae0b4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider ,db};


