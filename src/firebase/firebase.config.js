// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3d67AZC0GqJsTbqUJvQ6O8UYBUBLqfGw",
  authDomain: "dragon-news-3cadc.firebaseapp.com",
  projectId: "dragon-news-3cadc",
  storageBucket: "dragon-news-3cadc.appspot.com",
  messagingSenderId: "855967587392",
  appId: "1:855967587392:web:ac2a253fe0b8d6bd3453a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;