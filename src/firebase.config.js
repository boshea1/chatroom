// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq6CF8RiLDbFOujP6rDmUl1W9NsYvjxAo",
  authDomain: "chatroom-afd6d.firebaseapp.com",
  projectId: "chatroom-afd6d",
  storageBucket: "chatroom-afd6d.appspot.com",
  messagingSenderId: "250833376970",
  appId: "1:250833376970:web:e3f8ededd8ad30e2a00633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)