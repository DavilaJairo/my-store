
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// "AIzaSyDJOaW84u0vhqY-J1O3E-O0zNztIoInBuU"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "gamestore-a3290.firebaseapp.com",
  projectId: "gamestore-a3290",
  storageBucket: "gamestore-a3290.appspot.com",
  messagingSenderId: "611304804444",
  appId: "1:611304804444:web:ae96132d8c14d5f43a1699"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);