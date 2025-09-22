import {getFirestore,collection,doc,addDoc,onSnapshot,setDoc,getDocs,updateDoc,deleteDoc} from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js';

const db = getFirestore();
const dbRef = collection(db,"mytasks");
// console.log(dbRef);

// Get UI 
var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

// State 
let tasks = [];

getform.addEventListener('submit',(e)=>{
    // console.log('hay');

    addnew();

    e.preventDefault();
});

const getdatas = async ()=>{
    try{

        // Method 1 ( need to reload )

        // const docSnap = await getDocs(dbRef);
        // // console.log(docSnap);

        // docSnap.forEach(doc=>{
        //     // console.log(doc.data());
        //     // console.log(doc.id);

        //     let gettasks = doc.data();
        //         gettasks.id = doc.id;
        //     // console.log(gettasks);

        //     tasks.push(gettasks);
        // });

        // console.log(tasks);
        // showtaskstodom(tasks);

        // Method 2 ( live )

        await onSnapshot(dbRef,docSnap=>{

            tasks = []; // reset new for previous pushed data 

            docSnap.forEach(doc=>{

                let gettasks = doc.data();
                gettasks.id = doc.id;
                // console.log(gettasks);

                tasks.push(gettasks);
            });

            // console.log(tasks);
            showtaskstodom(tasks);

        });

    }catch(err){
        console.log("Get Data Error : ",err);
    }
}

getdatas();

const showtaskstodom = (taskarrs)=>{

    getul.innerHTML = "";

    taskarrs.forEach(task=>{
        // console.log(task);

        const li = document.createElement('li');

        li.appendChild(document.createTextNode(task.todo));
        li.id = task.id;
        li.className = "list-group-item";

        li.innerHTML += `
            <div class="action">
                <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
                <button type="button" class="delete-btn"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;

        console.log(li);
        getul.appendChild(li);

    });

}

async function addnew(){

    const todotext = gettextbox.value;
    // console.log(todotext);

    if(gettextbox.getAttribute('task-id')){
        // Update data

        try{

            await updateDoc(dbRef,{
                todo:todotext,
                done:false
            });

            gettextbox.removeAttribute('task-id');

        }catch(err){
            console.log("Update Data Error : ",err);
        }

    }else{  
        // Create data 

        try{

            await addDoc(dbRef,{
                todo:todotext,
                done:false
            });

            gettextbox.value = "";
            gettextbox.focus();

        }catch(err){
            console.log("Create Data Error : ",err);
        }

    }

}

getul.addEventListener('click',getclickedli);

function getclickedli(e){
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.closest('li'));
    // console.log(e.target.closest('li').id);
    // console.log(e.target.closest('li').getAttribute('id'));

    // console.log(e.target.className);
    // console.log(e.target.closest('button').className);

    const getid = e.target.closest('li').getAttribute('id');

    const button = e.target.closest('button');

    if(button){
        if(button.className === "edit-btn"){
            edittasks(getid);
        }else if(button.className === "delete-btn"){
            deletetasks(getid);
        }
    }else{
        donetasks(getid);
    }

}

console.log(tasks);

function gettaskbyid(id){
    console.log(id);
}

function edittasks(id){
    // console.log("edit tasks id = ",id);

    const task = gettaskbyid(id);
    console.log(task);
}

function deletetasks(id){
    // console.log("delete tasks id = ",id);

    const iscomfirmed = confirm("Are you sure to delete ? ");

    if(iscomfirmed){    

        const dbRef = doc(db,"mytasks",id);
        deleteDoc(dbRef);

    }else{
        return false;
    }
}

async function donetasks(id){
    // console.log("donetasks id = ",id);

    const getli = document.getElementById(id);
    // console.log(getli);

    getli.classList.toggle("completed");

    const dbRef = doc(db,"mytasks",id);

    try{
        await updateDoc(dbRef,{
            done:getli.classList.contains("completed") ? true : false
        });
    }catch(err){
        console.log("Done Data Error : ",err);
        throw err;
    }

}










