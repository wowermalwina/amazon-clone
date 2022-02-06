import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPNCNV89pDP9TJ5f1_kxr0aaC_sTLEJjI",
  authDomain: "clone-9be55.firebaseapp.com",
  projectId: "clone-9be55",
  storageBucket: "clone-9be55.appspot.com",
  messagingSenderId: "705459318793",
  appId: "1:705459318793:web:50a1460b076874339088d8",
  measurementId: "G-315SCT1WRS",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
