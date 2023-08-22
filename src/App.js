// Import the functions you need from the SDKs you need

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/checkout" element={<h2>Checkout</h2>}>
        </Route> 
        <Route path="/login" element={<h2>Lgin</h2>}>
        </Route> 
        {/* this is the default page/route 
        if you want to add wildcard info can just add :variableId to route*/}
        <Route path="/" element={<h2>HOME PAGE!!</h2>}>
        </Route> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;




// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
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

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app); */