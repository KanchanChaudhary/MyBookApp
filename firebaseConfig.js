// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyBPQFet22IAQ0OR2udXHhDyW-31GLNY6eI",
  // authDomain: "fir-demoapp-d7135.firebaseapp.com",
  // databaseURL: "https://fir-demoapp-d7135-default-rtdb.firebaseio.com",
  // projectId: "fir-demoapp-d7135",
  // storageBucket: "fir-demoapp-d7135.appspot.com",
  // messagingSenderId: "106769452015",
  // appId: "1:106769452015:web:ec05fd0033f41bc31b041a",
  // measurementId: "G-NBKT98W7C9"
  apiKey: "AIzaSyAxe1MUmG_Bw_LVoJZxWXWQsvNh87eq6-Y",
  authDomain: "fir-anslyticsdemoapp.firebaseapp.com",
  databaseURL: "https://fir-anslyticsdemoapp-default-rtdb.firebaseio.com",
  projectId: "fir-anslyticsdemoapp",
  storageBucket: "fir-anslyticsdemoapp.firebasestorage.app",
  messagingSenderId: "656472017127",
  appId: "1:656472017127:web:c0434c3f7d34c1c60efa42",
  measurementId: "G-1Q294TQ1K7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// // firebaseConfig.js
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBPQFet22IAQ0OR2udXHhDyW-31GLNY6eI",
//     authDomain: "fir-demoapp-d7135.firebaseapp.com",
//     databaseURL: "https://fir-demoapp-d7135-default-rtdb.firebaseio.com",
//     projectId: "fir-demoapp-d7135",
//     storageBucket: "fir-demoapp-d7135.appspot.com",
//     messagingSenderId: "106769452015",
//     appId: "1:106769452015:web:ec05fd0033f41bc31b041a",
//     measurementId: "G-NBKT98W7C9"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const db = firebase.firestore();

// export { db };
