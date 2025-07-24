import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYjJmDBoAFjRXaupkueyuU3tlOsaGcN5k",
  authDomain: "test-24e9c.firebaseapp.com",
  projectId: "test-24e9c",
  storageBucket: "test-24e9c.firebasestorage.app",
  messagingSenderId: "273223738932",
  appId: "1:273223738932:web:b8dcc5a7e53580f1e70c61"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };