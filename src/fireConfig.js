// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoilNP8vwKqwsZA_5_1JSzo_KMsGllbOw",
  authDomain: "my-chat-app-5e8c9.firebaseapp.com",
  projectId: "my-chat-app-5e8c9",
  storageBucket: "my-chat-app-5e8c9.appspot.com",
  messagingSenderId: "254851703082",
  appId: "1:254851703082:web:c03eb5eb862265536ffe53",
  measurementId: "G-CXKTGV0KHN"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig); // main app config
export const auth = getAuth()//authentication // 
export const storage = getStorage() //file storage
export const db = getFirestore() //database


  