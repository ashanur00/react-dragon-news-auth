// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaRmDs3TeMIzxzQie-0YXGICQfuKtDk9Q",
  authDomain: "react-dragon-news-auth-b67eb.firebaseapp.com",
  projectId: "react-dragon-news-auth-b67eb",
  storageBucket: "react-dragon-news-auth-b67eb.appspot.com",
  messagingSenderId: "561595146243",
  appId: "1:561595146243:web:79f3f6ce3905fc30afee36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;