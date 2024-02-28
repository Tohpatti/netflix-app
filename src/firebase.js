// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXQmSoSbyjLZDLWQuOk_UueUMv7ma7_J8",
    authDomain: "netflix-app-7ff15.firebaseapp.com",
    projectId: "netflix-app-7ff15",
    storageBucket: "netflix-app-7ff15.appspot.com",
    messagingSenderId: "275860359906",
    appId: "1:275860359906:web:80823228ccd11ab28aecbb",
    measurementId: "G-EG49QZLE70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);