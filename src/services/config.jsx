// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//Vamos importar estas dos funciones devla libreria firebase.
//la primera la utilizo par inicializar la conexion con firebase.
//la segunda se utiliza para tener una instacia del servicio firestore

//Estamos trabajando con un objeto con toda nuestra informacion de la cuenta. aca se incluye la Key personal de acceso a la base de dato.

//"AIzaSyAZSqDrGLQj7hxYn91T_qrg8-fE-UDqKBc"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "gamestore-a3290.firebaseapp.com",
  projectId: "gamestore-a3290",
  storageBucket: "gamestore-a3290.appspot.com",
  messagingSenderId: "611304804444",
  appId: "1:611304804444:web:ae96132d8c14d5f43a1699"
};

//Inicializamos Firebase y se pasa la configuracion como argumento. Esto devuelve una instacia de firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//exportamos esta referencia  para que este disponible en toda nuestra aplicacion.