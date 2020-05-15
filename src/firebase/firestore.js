// ────────────────────────────────────────────────────────── import 📥 ───┐
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────── initialize 🧨 ───┐
firebase.initializeApp({
  apiKey: "AIzaSyA_C2tytE615G3bKlxPZKt3xMC6dDg2CYA",
  authDomain: "lacoms-hub.firebaseapp.com",
  databaseURL: "https://lacoms-hub.firebaseio.com",
  projectId: "lacoms-hub",
  storageBucket: "lacoms-hub.appspot.com",
  messagingSenderId: "505208308066",
  appId: "1:505208308066:web:d33a67abd2249169d36c3b",
  measurementId: "G-L949F2FEPQ"
})

const db = firebase.firestore()
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default db
// ────────────────────────────────────────────────────────────────────────┘