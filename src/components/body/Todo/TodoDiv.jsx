import { onValue } from "firebase/database"
import { todoRef } from "../../../firebase/firebaseConfig.js"
import { useEffect, useState } from "react"
import { TodoPane } from "./TodoPane.jsx";

export function Todo(){
    const [todoList,setTodoList] = useState({});
    
    useEffect(() => {
        onValue(todoRef, (snapshot) => {
            const data = snapshot.val();
            setTodoList(data)
        })
    },[])

    console.log(todoList);
    return(
        <div className="column">
            <TodoPane todoList={todoList}/>
        </div>
    )
}