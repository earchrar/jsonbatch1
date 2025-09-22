import { initializeApp } from "firebase/app";
import { getFirestore,updateDoc,doc} from "firebase/firestore";

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

// updateDoc(doc(db,"products","myid1001"),{
//     name:"sponsor"
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch((error)=>{
//   console.log(error);
// });

// updateDoc(doc(db,"products","myid1001"),{
//     price: "2000"
// });

// updateDoc(doc(db,"products","myid1001"),{
//     price: "3000",
//     unit:"can"
// });

// const dbRef = doc(db,"products","myid1001");
// const data = {
//     name:"deedo"
// };

// updateDoc(dbRef,data);

const dbRef = doc(db,"products","myid1001");
const data = {
    name:"babimind",
    type:"non-food",
    price:20000,
    unit:"bot"
};

updateDoc(dbRef,data).then(()=>{
    console.log("Update Successfully");
}).catch(error=>{
    console.log(error);
});



