import { initializeApp } from "firebase/app";
import { getFirestore,getDoc,doc, onSnapshot} from "firebase/firestore";

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

// getDoc ( for single data by id )
// getDocs ( for multi data need to reload )

const dbRef  = doc(db,"products","myid1002");
const getdata = await getDoc(dbRef);

// console.log(getdata.data()); // { unit: 'bot', name: 'speed', stock: '200', type: 'food', price: 500 }
// console.log(getdata.data().name);// speed
// console.log(getdata.data().price);// 500
// console.log(getdata.data().type);// food

// => onSnapshot()  (live) 

const getresults = async ()=>{

  await onSnapshot(dbRef,docSnap=>{

      console.log(docSnap);
      console.log(docSnap.data());
      console.log(getdata.data().name);// speed
      console.log(getdata.data().price);// 500
      console.log(getdata.data().type);// food

  });

}

getresults();