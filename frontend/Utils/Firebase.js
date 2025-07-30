/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginonecart-74415.firebaseapp.com",
  projectId: "loginonecart-74415",
  storageBucket: "loginonecart-74415.firebasestorage.app",
  messagingSenderId: "995593485152",
  appId: "1:995593485152:web:a81acb47bfde04ed837c05"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider = new GoogleAuthProvider()
export  {auth ,provider}