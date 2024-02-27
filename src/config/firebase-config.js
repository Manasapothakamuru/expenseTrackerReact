// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWMJQVkAYDQ5kKvqcJD_P4YLZBO1HoQ4o",
  authDomain: "expense-tracker-681c3.firebaseapp.com",
  projectId: "expense-tracker-681c3",
  storageBucket: "expense-tracker-681c3.appspot.com",
  messagingSenderId: "388979695120",
  appId: "1:388979695120:web:bb93851bb48fb71067f495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const provider= new GoogleAuthProvider()
export const db= getFirestore(app)


//firebase login
//firebase init
//firebase deploy