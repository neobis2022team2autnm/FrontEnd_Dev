// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIhlkvOjfjVoZRkB07wt4-6I-Oydwz-0",
  authDomain: "auth-c634b.firebaseapp.com",
  projectId: "auth-c634b",
  storageBucket: "auth-c634b.appspot.com",
  messagingSenderId: "31090185659",
  appId: "1:31090185659:web:c64b161f12dbb5f2be209e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);