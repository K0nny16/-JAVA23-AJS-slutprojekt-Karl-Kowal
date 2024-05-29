import { ref, remove } from "firebase/database";
import { db } from "../firebase/firebaseConfig.js";

//Tarbort en användare från en viss tabell.
export function removeTask(key:string,table:string):void{
    try{
        const userToRemove = ref(db,table+key);
        remove(userToRemove);
    }catch(error){
        alert("Något gick fel testa igen!");
        console.log(error);
    }
}