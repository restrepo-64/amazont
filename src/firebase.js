// Import the functions you need from the SDKs you need
//import firebase from "firebase/compat/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'


//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBiZBzr4YkGjyIaG2Nr_b7i0XWTA9J2-Eg",

  authDomain: "t-7ec4a.firebaseapp.com",

  projectId: "t-7ec4a",

  storageBucket: "t-7ec4a.appspot.com",

  messagingSenderId: "761271723611",

  appId: "1:761271723611:web:2047055e1d4741ffca417e",

  measurementId: "G-HK3F9M3V74"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

//const db = app.firestore();
const auth = firebase.auth();

export { auth };
