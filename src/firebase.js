import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPNCNV89pDP9TJ5f1_kxr0aaC_sTLEJjI",
  authDomain: "clone-9be55.firebaseapp.com",
  projectId: "clone-9be55",
  storageBucket: "clone-9be55.appspot.com",
  messagingSenderId: "705459318793",
  appId: "1:705459318793:web:50a1460b076874339088d8",
  measurementId: "G-315SCT1WRS",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
