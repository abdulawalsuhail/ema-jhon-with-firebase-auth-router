// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMdkH2bkP-L_9LhcIcsqVLNuXGz-uBa2I",
    authDomain: "ema-jhon-spa-c4881.firebaseapp.com",
    projectId: "ema-jhon-spa-c4881",
    storageBucket: "ema-jhon-spa-c4881.appspot.com",
    messagingSenderId: "1068912290042",
    appId: "1:1068912290042:web:77482f12a62a3ad7ebc143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;