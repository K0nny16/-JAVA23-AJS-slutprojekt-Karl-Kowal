import { useState } from "react"

export function App(){

    const [task,setTask] = useState({});

    return(
        <>
            <Head setTask={setTask}/>
        </>
    )
}