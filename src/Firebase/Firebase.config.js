// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf3Ky9VaG2BOaaAeSEUdeyTxlNvexijfw",
  authDomain: "react-dragon-news-auth-e61a4.firebaseapp.com",
  projectId: "react-dragon-news-auth-e61a4",
  storageBucket: "react-dragon-news-auth-e61a4.appspot.com",
  messagingSenderId: "128047891034",
  appId: "1:128047891034:web:775bcb4332d783e97d8e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;