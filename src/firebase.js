import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRFvtFtdEV12Ej84oXoQtfu3GL7j54Xmg",
  authDomain: "instagram-clone-f21a9.firebaseapp.com",
  projectId: "instagram-clone-f21a9",
  storageBucket: "instagram-clone-f21a9.appspot.com",
  messagingSenderId: "153639651224",
  appId: "1:153639651224:web:075c68000fb23c2ce94ded",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
