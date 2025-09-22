import { initializeApp } from "firebase/app";
import { getFirestore,updateDoc,doc, deleteField} from "firebase/firestore";

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

const dbRef = doc(db,"products","myid1001");

// updateDoc(dbRef,{
//     name:"dedoo",
//     type:"food",
//     price:"20000"
// });

// updateDoc(dbRef,{
//     unit:deleteField()
// });

updateDoc(dbRef,{
    type:deleteField()
}).then(()=>{
  console.log("Delete Successfully");
}).catch((error)=>{
  console.log(error);
});

// const dbRef = doc(db,"products","myid1001");
// deleteDoc(dbRef);

// const dbRef = doc(db,"products","myid1001");
// deleteDoc(dbRef).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>console.log(error));