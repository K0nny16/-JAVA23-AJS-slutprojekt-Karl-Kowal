import { onValue } from "firebase/database";
import { useEffect, useState } from "react"
import { doneRef } from "../../../firebase/firebaseConfig.js";
import { DonePane } from "./DonePane.jsx";

export function Done(){
    const [doneList,setDoneList] = useState({});

    //Updaterar statet när ändringar i databasen sker.
    useEffect(() =>{
        onValue(doneRef, (snapshot) => {
            const data = snapshot.val();
            setDoneList(data);
        })
    },[])


    //Tar varje task som är status inprogress och bygger en komponent med egenskaperna från varje task.
    return(
        <div className="column">
            <h2>Done</h2>
            {Object.keys(doneList).map(key => {
               const done = doneList[key];
               return(
                   <DonePane keyProp={key} name={done.name} task={done.task} workArea={done.workArea}/>
               ) 
            })}
        </div> 
    )
}