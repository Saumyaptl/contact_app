// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMFKFe_q7oS4Gx274WA0pihiKZuYslOwU",
  authDomain: "contact-app-51489.firebaseapp.com",
  projectId: "contact-app-51489",
  storageBucket: "contact-app-51489.appspot.com",
  messagingSenderId: "969206900635",
  appId: "1:969206900635:web:2495293688dc452df8233e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)