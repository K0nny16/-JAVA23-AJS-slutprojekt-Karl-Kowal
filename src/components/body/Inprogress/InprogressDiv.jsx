import { useEffect, useState } from "react"
import { inprogressRef } from "../../../firebase/firebaseConfig.js";
import { onValue } from "firebase/database";
import { InprogressPane } from "./InprogressPane.jsx";

export function Inprogress(){
    const [inprogressList,setInprogressList] = useState({})

    useEffect(() => {
        onValue(inprogressRef, (snapshot) => {
            const data = snapshot.val();
            setInprogressList(data);
        })
    },[])
    return(
        <div className="column">
            <h2>Inprogress</h2>
            <InprogressPane inprogressList={inprogressList}/>
        </div>
    )
}