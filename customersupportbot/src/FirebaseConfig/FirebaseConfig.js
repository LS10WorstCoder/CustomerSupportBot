// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsc0hWvATmD-_CRcdvLoAdUhjj_R8rSsc",
  authDomain: "customersupportbot-20fca.firebaseapp.com",
  projectId: "customersupportbot-20fca",
  storageBucket: "customersupportbot-20fca.appspot.com",
  messagingSenderId: "702437545030",
  appId: "1:702437545030:web:816d19d3b1fb7900dbe647",
  measurementId: "G-P38Z9ZDKRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);