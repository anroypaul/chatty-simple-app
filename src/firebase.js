import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlhwvnqXu1IjmYYczyzjXZ3_xthw91Dac",
  authDomain: "chattyapp-4d2aa.firebaseapp.com",
  projectId: "chattyapp-4d2aa",
  storageBucket: "chattyapp-4d2aa.appspot.com",
  messagingSenderId: "322726513552",
  appId: "1:322726513552:web:cb03c9e3311ac1b8a8c115",
  measurementId: "G-TFPPX1KZ0P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
