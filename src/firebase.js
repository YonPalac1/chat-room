// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7UKu35-EpOqTJSBJt4hbkaevIAyNWo1M",
  authDomain: "chat-app-810b6.firebaseapp.com",
  projectId: "chat-app-810b6",
  storageBucket: "chat-app-810b6.appspot.com",
  messagingSenderId: "8379591230",
  appId: "1:8379591230:web:b8c83e6858bb74b8b6ff6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()