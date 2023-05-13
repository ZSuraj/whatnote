// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJHbEb59EVvptWyNg0AZRc6zp9i5Mi-o0",
  authDomain: "whatnote-17361.firebaseapp.com",
  projectId: "whatnote-17361",
  storageBucket: "whatnote-17361.appspot.com",
  messagingSenderId: "683557687481",
  appId: "1:683557687481:web:9d64da5dcdb237e9494b68",
  measurementId: "G-QF4426MG5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app);

const analytics = getAnalytics(app);

export {db, auth}
export default analytics