// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwkgbjNgViSHmOTWGWi_tCuIaGwgC3QsI",
  authDomain: "hartley-7e158.firebaseapp.com",
  projectId: "hartley-7e158",
  storageBucket: "hartley-7e158.appspot.com",
  messagingSenderId: "867986827580",
  appId: "1:867986827580:web:96e0a69e4df0502f9b1639",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
