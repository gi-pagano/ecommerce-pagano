import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app"; //FIREBASE CONFIG
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAJFBG4DhU3mnmz6nzJSG8-S0P3MCHmdE",
  authDomain: "ecommerce-pagano.firebaseapp.com",
  projectId: "ecommerce-pagano",
  storageBucket: "ecommerce-pagano.appspot.com",
  messagingSenderId: "542895926638",
  appId: "1:542895926638:web:f61246a022279627c3a57f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
