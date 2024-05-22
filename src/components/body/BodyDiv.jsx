import { Todo } from "./Todo/TodoDiv.jsx";
import { Inprogress } from "./Inprogress/Inprogress.jsx";
import { Done } from "./Done/Done.jsx";
export function BodyDiv(){
    return(
        <div id="contentContainer">
            <Todo/>
            <div className="column">
                <Inprogress/>
            </div>
            <div className="column">
                <Done/>
            </div>
        </div>
    )
}