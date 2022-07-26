import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCF_F2XZZepU0BVgbsQXKrksyEYUBW1VIU",
  authDomain: "disneyplus-clone-supro.firebaseapp.com",
  projectId: "disneyplus-clone-supro",
  storageBucket: "disneyplus-clone-supro.appspot.com",
  messagingSenderId: "525810395612",
  appId: "1:525810395612:web:cb0532d8d8a86480c98719",
  measurementId: "G-RKWCYBNK2L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
