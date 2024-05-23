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

    return(
        <div className="column">
            <h2>Done</h2>
            <DonePane doneList={doneList}/>
        </div> 
    )
}