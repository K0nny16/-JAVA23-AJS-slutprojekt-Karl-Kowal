import { ref, remove } from "firebase/database";
import { db } from "../firebase/firebaseConfig.js";
//Tarbort en användare från en viss tabbel.
export function removeTask(key:string,table:string):void{
    const userToRemove = ref(db,table+key);
    remove(userToRemove);
}