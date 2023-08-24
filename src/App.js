// Import the functions you need from the SDKs you need

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        {/*<Header />  this puts the header on top of EVERY site in navigation map   */}
        <Routes>
          <Route path="/checkout" element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* this is the default page/route 
        if you want to add wildcard info can just add :variableId to route*/}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
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
