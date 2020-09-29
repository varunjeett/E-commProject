import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyCmF5f4ZkbyCWq4d7CXfyTUFBZJVI0D-_g",
  authDomain: "buncholunch-89ce8.firebaseapp.com",
  databaseURL: "https://buncholunch-89ce8.firebaseio.com",
  projectId: "buncholunch-89ce8",
  storageBucket: "buncholunch-89ce8.appspot.com",
  messagingSenderId: "80210873507",
  appId: "1:80210873507:web:83cc5d70fd6bd84a9b4316",
  measurementId: "G-Z40TNH2MHN"
});


const db=firebaseApp.firestore();

const auth = firebase.auth();
export { db,auth };