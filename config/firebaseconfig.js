// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHKzNyIT-ZQ1L39Q2RDB--MfgFi7qlqIc",
  authDomain: "my-project-91c7a.firebaseapp.com",
  projectId: "my-project-91c7a",
  storageBucket: "my-project-91c7a.firebasestorage.app",
  messagingSenderId: "931505301620",
  appId: "1:931505301620:web:3de8e9b96ffbd7ea1d8921"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export{db,storage}