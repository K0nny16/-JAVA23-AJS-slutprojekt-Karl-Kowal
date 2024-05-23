import { DatabaseReference, update } from "firebase/database";

type firebasePost = {
    name : string,
    task : string,
    workArea : string
}


export function post(obj:firebasePost,key:string,ref:DatabaseReference):void{
    const {name,task,workArea} = obj;
    const moveTask = {};
    moveTask[key] = {name,workArea,task};
    update(ref,moveTask);
}