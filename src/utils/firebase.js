import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDUJWp9m_-t7xLDP41eN1jnY6UcS0opnBo",
  authDomain: "mrhost-23cca.firebaseapp.com",
  projectId: "mrhost-23cca",
  storageBucket: "mrhost-23cca.appspot.com",
  messagingSenderId: "997689265583",
  appId: "1:997689265583:web:773e7dfb99375eb2a3f35a",
};

//firebase.initializeApp(firebaseConfig);

export default firebase;

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
