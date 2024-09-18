import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADtbsL8vt9uOAbALk9oiLNUGcl-nyv5UU",
  authDomain: "dateapp-9eb51.firebaseapp.com",
  projectId: "dateapp-9eb51",
  storageBucket: "dateapp-9eb51.appspot.com",
  messagingSenderId: "993132677986",
  appId: "1:993132677986:web:0a267fe279516d31ef7a3b",
  measurementId: "G-Q96BH8P3NP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, ref, uploadBytes, getDownloadURL, db };
