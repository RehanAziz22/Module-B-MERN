// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtG61QqDdxPH78pF2n5aaY3_4sJiCHrKM",
  authDomain: "todo-156bb.firebaseapp.com",
  databaseURL: "https://todo-156bb-default-rtdb.firebaseio.com",
  projectId: "todo-156bb",
  storageBucket: "todo-156bb.appspot.com",
  messagingSenderId: "981192503362",
  appId: "1:981192503362:web:c83594ccf662cf7f1d3ddb",
  measurementId: "G-E2WMKCQL1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;