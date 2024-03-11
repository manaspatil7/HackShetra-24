// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ouKSMj-pWhyfYb9MQsH1yRgXjCjZVBc",
  authDomain: "nexus-carpool.firebaseapp.com",
  projectId: "nexus-carpool",
  storageBucket: "nexus-carpool.appspot.com",
  messagingSenderId: "299194136381",
  appId: "1:299194136381:web:701f92179114ca6751f754",
  measurementId: "G-GSP60SNK4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  auth = getAuth(app)
export const provider = new GoogleAuthProvider();