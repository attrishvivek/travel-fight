import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOh77M4s_H5Xz1Sf-yPuKYBSEoLG2P3aQ",
    authDomain: "flight-travel-43776.firebaseapp.com",
    projectId: "flight-travel-43776",
    storageBucket: "flight-travel-43776.appspot.com",
    messagingSenderId: "1009586300860",
    appId: "1:1009586300860:web:9c02de40f5105c28c1edb9",
    measurementId: "G-7NZCD9L5ST"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };