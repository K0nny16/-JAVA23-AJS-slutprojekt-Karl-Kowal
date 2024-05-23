import { doneRef } from "../../../firebase/firebaseConfig.js";
import { post } from "../../../Utils/Post.ts";
import { removeTask } from "../../../Utils/Remove.ts";
import { capitalizeFirstLetter, extractText } from "../../../Utils/Utils.ts";

export function InprogressPane({inprogressList}){

    function toDone(event){
        const key = event.target.getAttribute("data-key");
        const partentDiv = event.target.closest(".pane");
        let task = partentDiv.querySelector("#task").innerText;
        let workArea = partentDiv.querySelector("#workArea").innerText;
        let name = partentDiv.querySelector("#name").innerText;

        task = extractText(task,"Task");
        workArea = extractText(workArea,"Work Area");
        name = extractText(name, "Assigned to");
        post({name,workArea,task},key,doneRef);
        removeTask(key,"inprogress/");
    }

    return(
        <>
            {Object.keys(inprogressList).map(key => {
                const inprogress = inprogressList[key];
                const style = inprogress.workArea.toLowerCase();
                return(
                    <div key={key} className={`pane ${style}`}>
                        <p id="task">Task: {capitalizeFirstLetter(inprogress.task)}</p>
                        <p id="workArea">Work Area: {capitalizeFirstLetter(inprogress.workArea)}</p>
                        <p id="name">Assigned to: {capitalizeFirstLetter(inprogress.name)}</p>
                        <button onClick={toDone} data-key={key}>Move to Done</button>
                    </div>
                )
            })}
        </>
    )
}