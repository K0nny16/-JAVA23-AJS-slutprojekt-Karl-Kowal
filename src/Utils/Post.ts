import { DatabaseReference, update } from "firebase/database";

//Typ som sedan deconstructas.
type firebasePost = {
    name : string,
    task : string,
    workArea : string
}

//Gör en update beroende på vilket allternativ andvändaren har valt.
export function post(obj:firebasePost,key:string,ref:DatabaseReference):void{
    try{
        const {name,task,workArea} = obj;
        const moveTask = {};
        moveTask[key] = {name,workArea,task};
        update(ref,moveTask);
    }catch(error){
        alert("Något gick fel!");
        console.log(error);
    }
}