import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

/* import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth"; */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfOjSt3ruXoBaCTis_yuWpWlBbOMtBAKo",
  authDomain: "react-app-curso-ba351.firebaseapp.com",
  projectId: "react-app-curso-ba351",
  storageBucket: "react-app-curso-ba351.appspot.com",
  messagingSenderId: "988245285468",
  appId: "1:988245285468:web:57739e584acc734de4e499",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
// Initialize Firebase
/* const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
 */
