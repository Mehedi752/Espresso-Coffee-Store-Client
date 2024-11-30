// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPbexG4faULwYaDnZpzU00nkNol4_2P1k",
  authDomain: "coffee-store-16866.firebaseapp.com",
  projectId: "coffee-store-16866",
  storageBucket: "coffee-store-16866.firebasestorage.app",
  messagingSenderId: "979174588411",
  appId: "1:979174588411:web:3c2daf4ce6c5a049df955e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
