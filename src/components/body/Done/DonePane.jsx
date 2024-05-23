import { removeTask } from "../../../Utils/Remove.ts";
import { capitalizeFirstLetter } from "../../../Utils/Utils.ts";

export function DonePane({doneList}){

    function deleteTask(event){
        const key = event.target.getAttribute("data-key");
        removeTask(key,"done/")
    }

    return(
        <>
            {Object.keys(doneList).map(key => {
                const done = doneList[key];
                const style = done.workArea.toLowerCase();
                return(
                    <div key={key} className={`pane ${style}`}>
                        <p id="task">Task: {capitalizeFirstLetter(done.task)}</p>
                        <p id="workArea">Work Area: {capitalizeFirstLetter(done.workArea)}</p>
                        <p id="name">Assigned to: {capitalizeFirstLetter(done.name)}</p>
                        <button data-key={key} onClick={deleteTask}>Remove task</button>
                    </div>
                )
            })}
        </>
    )
}