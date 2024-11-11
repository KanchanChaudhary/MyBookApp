// firebase.js for Firebase v9
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxe1MUmG_Bw_LVoJZxWXWQsvNh87eq6-Y",
  authDomain: "fir-anslyticsdemoapp.firebaseapp.com",
  databaseURL: "https://fir-anslyticsdemoapp-default-rtdb.firebaseio.com",
  projectId: "fir-anslyticsdemoapp",
  storageBucket: "fir-anslyticsdemoapp.firebasestorage.app",
  messagingSenderId: "656472017127",
  appId: "1:656472017127:web:c0434c3f7d34c1c60efa42",
  measurementId: "G-1Q294TQ1K7",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };