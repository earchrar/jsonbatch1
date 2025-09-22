// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,collection } from "firebase/firestore";
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
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
console.log(db);

addDoc(collection(db,"users"),{
    name:"aung aung",
    city:"Bago",
    age: 40
});

// => display auto generated id ! after data set 
//  addDoc(collection(parameter1,parameter2),{}) 

addDoc(collection(db,'users'),{
    name:"su su",
    city: "Yangon",
    age: 20
}).then(docRef=>{
  // Document Reference 
  console.log(docRef.id);
}).catch(error=>{
  console.log(error);
});

// Create Database 
// https://firebase.google.com/ > build > Firestore Databse > Create Database

// Error for writing (PERMISSION_DENIED)
// Rule > allow read , write: if true; > Publish 




