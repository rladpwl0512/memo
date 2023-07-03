// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCklLrDuf6Ql8IVU66MxNHvF6TBm9ffAxw",
  authDomain: "memo-59b8a.firebaseapp.com",
  projectId: "memo-59b8a",
  storageBucket: "memo-59b8a.appspot.com",
  messagingSenderId: "625693553906",
  appId: "1:625693553906:web:2922f9878c4f650cee0c6b",
  measurementId: "G-948N8C3Q8M",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db, firebase };
