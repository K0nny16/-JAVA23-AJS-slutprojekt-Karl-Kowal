import { doneRef } from "../../../firebase/firebaseConfig.js";
import { post } from "../../../Utils/Post.ts";
import { removeTask } from "../../../Utils/Remove.ts";
import { capitalizeFirstLetter } from "../../../Utils/Utils.ts";

export function InprogressPane({keyProp,name,task,workArea}){

    //Skickar datan från diven till nästa tabell i firebase (done) och tar bort den från den nuvarnade.
    //Ändra så att mappande sker i diven innan och workarea och task passas in som props.
    function toDone(){
        post({name,workArea,task},keyProp,doneRef);
        removeTask(keyProp,"inprogress/");
    }

    const style = workArea.toLowerCase();

    return(
        <>
            {/*Itererar över dom olika keysen och displayar attributerna i en div med p taggar*/}
            <div key={keyProp} className={`pane ${style}`}>
                <p>Task: {capitalizeFirstLetter(task)}</p>
                <p>Work Area: {capitalizeFirstLetter(workArea)}</p>
                <p>Assigned to: {capitalizeFirstLetter(name)}</p>
                <button onClick={toDone} >Move to Done</button>
            </div>
        </>
    )
}