// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjMJrtn6aKwZqPBWgOsPQEfOlA6mS3_IY",
  authDomain: "check-and-tock.firebaseapp.com",
  projectId: "check-and-tock",
  storageBucket: "check-and-tock.appspot.com",
  messagingSenderId: "201331991956",
  appId: "1:201331991956:web:8aa2436ab617f7bac79b81"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)