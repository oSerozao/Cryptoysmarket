
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
//kperez
const firebaseConfig = {
  apiKey: "AIzaSyAT0wDYF7TFyOQz8BlEr23CsujQp2Zwtt8",
  authDomain: "marketplace-2911e.firebaseapp.com",
  projectId: "marketplace-2911e",
  storageBucket: "marketplace-2911e.appspot.com",
  messagingSenderId: "1008497571708",
  appId: "1:1008497571708:web:18ae23b5682d5aeda996f9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)