// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Fe9y2KhvCLq0FXxtr6JBZ8qN9K-pWq4",
  authDomain: "vidchat-12c32.firebaseapp.com",
  projectId: "vidchat-12c32",
  storageBucket: "vidchat-12c32.appspot.com",
  messagingSenderId: "515710359550",
  appId: "1:515710359550:web:aae3144a048aba335b12af",
  measurementId: "G-K8M3R4296R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
