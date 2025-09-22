import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc} from "firebase/firestore";

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

// setDoc(doc(db,"products","myid1001"),{
//     name:"deedo",
//     type:"food",
//     price:300
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(err=>console.log(err));

// setDoc(doc(db,"products","PsBaWGG0mCXwS1rimqQR"),{
//     name:"cocacola",
//     type:"food",
//     price:300
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(err=>console.log(err));

// => Before Merge

// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price: 500,
//     unit: "bot"
// }).catch(err=>{
//   console.log(err);
// });

// setDoc(doc(db,"products","myid1002"),{
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch(err=>{
//   console.log(err);
// });

// setDoc(doc(db,"products","myid1002"),{
//     name:"deedo"
// }).catch(err=>{
//   console.log(err);
// });

// setDoc(doc(db,"products","myid1002"),{
//     name:"deedo"
// },{merge:true}).catch(err=>{
//   console.log(err);
// });

// => After Merge 

// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price: 500,
//     unit: "bot"
// }).catch(err=>{
//   console.log(err);
// });

// setDoc(doc(db,"products","myid1002"),{
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch(err=>{
//   console.log(err);
// });

// setDoc(doc(db,"products","myid1002"),{
//     name:"deedo"
// },{merge:true}).catch(err=>{
//   console.log(err);
// });

// Before Merge 

// setDoc(doc(db,"products","myid1002"),{
//     name:"deedo"
// },{merge:true}).catch(err=>{
//   console.log(err);
// });

// After Merge 

// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price: 500,
//     unit: "bot"
// }).catch(err=>{
//   console.log(err);
// });

// setDoc(doc(db,"products","myid1002"),{
//     name:"deedo"
// },{merge:true}).catch(err=>{
//   console.log(err);
// });

// Before Merge 

// setDoc(doc(db,"products","myid1002"),{
//     stock:"200"
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch(err=>{
//   console.log(err);
// });

// After Merge 

setDoc(doc(db,"products","myid1002"),{
    name:"speed",
    type:"food",
    price: 500,
    unit: "bot"
},{merge:true}).then(()=>{
  console.log("Update Successfully");
}).catch(err=>{
  console.log(err);
});









