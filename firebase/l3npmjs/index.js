console.log("Hello Sir. how are you");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVTN60uc_oXik_cuGG0SfO2EIOWIoCClc",
  authDomain: "my-first-project-32aab.firebaseapp.com",
  projectId: "my-first-project-32aab",
  storageBucket: "my-first-project-32aab.firebasestorage.app",
  messagingSenderId: "230908692179",
  appId: "1:230908692179:web:8fb7a13a7d62953024b626",
  measurementId: "G-9FTKRB77S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
// console.log("server is working");  

const db = getFirestore(app);
console.log(db);

// => In Terminal 
// cd l3npmjs 
// node index.js
// or 
// nodemon index.js ( auto reset after ctl+s ) 
// or 
// rs 

// Initialize package.json
// npm init -y 

// npm run dev

// npm install firebase

// https://firebase.google.com/ > More > Docs > Overview > Firebase fundamentals > web icon > Access Firebase in your app > Cloud Firestore for Web >


