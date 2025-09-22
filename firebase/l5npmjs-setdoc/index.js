import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc,collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVTN60uc_oXik_cuGG0SfO2EIOWIoCClc",
  authDomain: "my-first-project-32aab.firebaseapp.com",
  projectId: "my-first-project-32aab",
  storageBucket: "my-first-project-32aab.firebasestorage.app",
  messagingSenderId: "230908692179",
  appId: "1:230908692179:web:8fb7a13a7d62953024b626",
  measurementId: "G-9FTKRB77S3"
};

// Initalizae Firebase 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// console.log(db);
// setDoc(doc(parameter1(db),parameter2(collections),parameter3(id)),{})

// setDoc(doc(db,"products","myid1001"),{
//     name:"redbull",
//     type:"food",
//     price:2000
// });

// setDoc(doc(db,"products","myid1002"),{
//     name:"sponsor",
//     type:"food",
//     price:1000
// }).then((docRef)=>{
//     console.log("Create Successfully");
//     console.log(docRef.id); // error
// }).catch(err=>console.log(err));

// setDoc(doc(db,"products","myid1003"),{
//     name:"m150",
//     type:"food",
//     price:1000
// }).then((docRef)=>{
//     console.log("Create Successfully");
//     console.log(docRef.id); // error
// }).catch(err=>console.log(err));

// setDoc(doc(collection(db,"products"),"myid1004"),{
//     name:"firedragon",
//     type:"food",
//     price:1000
// }).then(()=>{
//     console.log("Create Successfully");
// }).catch(err=>console.log(err));

setDoc(doc(collection(db,"products")),{
    name:"deedo",
    type:"food",
    price:1000
}).then(()=>{
    console.log("Create Successfully");
}).catch(err=>console.log(err));





