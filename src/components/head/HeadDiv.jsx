import { push, update } from "firebase/database";
import { todoRef } from "../../firebase/firebaseConfig";

export function HeadDiv(){

    function postNewTask(event){
        event.preventDefault();
        const task = document.querySelector("#input").value;
        const workArea = document.querySelector("#workArea").value;
        document.querySelector("#input").value="";

        const newID = push(todoRef).key;
        const newTask = {};
        newTask[newID] = {task,workArea};
        update(todoRef,newTask);
    }


    return(
        <div id="head">
            <h1>Scrum Board</h1>
            <form>
                <input type="text" placeholder="Beskriv problemet kort!" id="input" required></input>
                <select id="workArea" name="workArea">
                    <option value="backend">Dev Backend</option>
                    <option value="ux">UX</option>
                    <option value="frontend">Dev Frontend</option>
                </select>
                <button type="submit" onClick={postNewTask}>Add</button>
            </form>
        </div>
    )
}