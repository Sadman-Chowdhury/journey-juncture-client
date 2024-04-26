// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHzHTNHoEvnJy1TNoMCZtzG5XRQDElfFs",
  authDomain: "journey-juncture.firebaseapp.com",
  projectId: "journey-juncture",
  storageBucket: "journey-juncture.appspot.com",
  messagingSenderId: "568170125684",
  appId: "1:568170125684:web:07d55e48945911600cb421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app