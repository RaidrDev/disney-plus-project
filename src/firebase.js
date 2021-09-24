import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbmcCey93sBHcTjcdVtFWDdBuvcgx-JuM",
  authDomain: "web-projects-623bd.firebaseapp.com",
  projectId: "web-projects-623bd",
  storageBucket: "web-projects-623bd.appspot.com",
  messagingSenderId: "960210497346",
  appId: "1:960210497346:web:e59511af74ec26611622db",
  measurementId: "G-MM9YWVZ5JD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;