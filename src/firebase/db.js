// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQK4qNfdRCUORy0-ZQNB7aeqmLhGXkH4M",
  authDomain: "pustaka-booking-msib.firebaseapp.com",
  projectId: "pustaka-booking-msib",
  storageBucket: "pustaka-booking-msib.appspot.com",
  messagingSenderId: "516169427367",
  appId: "1:516169427367:web:4dab4da72df4ff28266e82",
  measurementId: "G-2C92JQEGKB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const DB = db;