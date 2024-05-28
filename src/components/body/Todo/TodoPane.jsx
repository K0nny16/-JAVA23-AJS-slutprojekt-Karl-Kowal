import { inprogressRef } from "../../../firebase/firebaseConfig.js";
import { post } from "../../../Utils/Post.ts";
import { removeTask } from "../../../Utils/Remove.ts";
import { capitalizeFirstLetter} from "../../../Utils/Utils.ts";

export function TodoPane({workArea,task,keyProp}){
    
    let name;

    function inputUser(event){
        name = event.target.value.trim();
    }

    //Skickar datan fårn den valda diven till inprogress tabellen på firebase och tar bort det från todo tabellen.
    //Ändra så att mappande sker i diven innan och workarea och task passas in som props.
    function toInprogress(){
        post({task,workArea,name},keyProp,inprogressRef);
        removeTask(keyProp,"todo/")
    }

    const style = workArea.toLowerCase();

    return(
        <div key={keyProp} className={`pane ${style}`}>
            <form onSubmit={toInprogress}>
                <p>Task: {capitalizeFirstLetter(task)}</p>
                <p>Work Area: {capitalizeFirstLetter(workArea)}</p>
                <input type="text" onChange={inputUser} placeholder="Enter name!" required></input>
                <button type="submit">Assign</button>
            </form>
        </div>
    )
}