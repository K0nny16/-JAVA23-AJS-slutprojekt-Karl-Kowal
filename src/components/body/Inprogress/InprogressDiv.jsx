import { useEffect, useState } from "react"
import { inprogressRef } from "../../../firebase/firebaseConfig.js";
import { onValue } from "firebase/database";
import { InprogressPane } from "./InprogressPane.jsx";

export function Inprogress(){
    const [inprogressList,setInprogressList] = useState({})

    //När datan på firebase ändras så updateras statet och anpassar renderingen.
    useEffect(() => {
        onValue(inprogressRef, (snapshot) => {
            const data = snapshot.val();
            setInprogressList(data);
        })
    },[])
    
    //Tar varje task som är status inprogress och bygger en komponent med egenskaperna från varje task.
    return(
        <div className="column">
            <h2>Inprogress</h2>
            {Object.keys(inprogressList).map(key =>{
                const tasks = inprogressList[key];
                return(
                    <InprogressPane keyProp={key} task={tasks.task} workArea={tasks.workArea} name={tasks.name}/>
                )
            })}
        </div>
    )
}