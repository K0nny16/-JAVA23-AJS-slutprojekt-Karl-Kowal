import { ref, remove } from "firebase/database";
import { db } from "../firebase/firebaseConfig.js";

export function removeTask(key:string,table:string):void{
    const userToRemove = ref(db,table+key);
    remove(userToRemove);
}