import { inprogressRef } from "../../../firebase/firebaseConfig.js";
import { post } from "../../../Utils/Post.ts";
import { removeTask } from "../../../Utils/Remove.ts";
import { capitalizeFirstLetter,extractText } from "../../../Utils/Utils.ts";

export function TodoPane({todoList}){
    
    function toInprogress(event){
        const key = event.target.getAttribute("data-key");
        const parentDiv = event.target.closest(".pane");
        let task = parentDiv.querySelector("#task").innerText;
        let workArea = parentDiv.querySelector("#workArea").innerText;
        const name = parentDiv.querySelector("input").value;

        task = extractText(task,"Task");
        workArea = extractText(workArea,"Work Area");

        post({task,workArea,name},key,inprogressRef);
        removeTask(key,"todo/")
    }

    return(
        <>
            {Object.keys(todoList).map(key => {
                const task = todoList[key];
                const style = task.workArea.toLowerCase();
                return(
                    <div key={key} className={`pane ${style}`}>
                        <p id="task">Task: {capitalizeFirstLetter(task.task)}</p>
                        <p id="workArea">Work Area: {capitalizeFirstLetter(task.workArea)}</p>
                        <input id="name" type="text" placeholder="Enter name" required></input>
                        <button onClick={toInprogress} data-key={key}>Assign</button>
                        <br></br>
                    </div>
                )
            })}
        </>
    )
}