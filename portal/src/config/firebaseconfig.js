// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIu9xXMmlA3SFmDni6dQvrV7F7WiQi5zs",
  authDomain: "portal-2002.firebaseapp.com",
  projectId: "portal-2002",
  storageBucket: "portal-2002.appspot.com",
  messagingSenderId: "208923689902",
  appId: "1:208923689902:web:dab7eabd28ff555fc5be3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;