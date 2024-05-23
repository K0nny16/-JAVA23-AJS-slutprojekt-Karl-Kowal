import { onValue } from "firebase/database"
import { todoRef } from "../../../firebase/firebaseConfig.js"
import { useEffect, useState } from "react"
import { TodoPane } from "./TodoPane.jsx";

export function Todo(){
    const [todoList,setTodoList] = useState({});
    
    //Hämtar datan från den valda tabellen och updaterar statet när databasen updateras.
    useEffect(() => {
        onValue(todoRef, (snapshot) => {
            const data = snapshot.val();
            setTodoList(data)
        })
    },[])

    return(
        <div className="column">
            <h2>Todo</h2>
            <TodoPane todoList={todoList}/>
        </div>
    )
}