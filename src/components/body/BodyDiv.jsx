import { Todo } from "./Todo/TodoDiv.jsx";
import { Inprogress } from "./Inprogress/InprogressDiv.jsx";
import { Done } from "./Done/DoneDiv.jsx";
export function BodyDiv(){
    return(
        <div id="contentContainer">
            <Todo/>
            <Inprogress/>
            <Done/>
        </div>
    )
}