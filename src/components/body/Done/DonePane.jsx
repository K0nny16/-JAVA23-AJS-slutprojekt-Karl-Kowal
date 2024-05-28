import { removeTask } from "../../../Utils/Remove.ts";
import { capitalizeFirstLetter } from "../../../Utils/Utils.ts";

export function DonePane({keyProp,name,workArea,task}){

    //Tarbort tasket från databasen.
    //Ändra så att mappande sker i diven innan och workarea och task passas in som props.
    function deleteTask(){
        removeTask(keyProp,"done/")
    }

    const style = workArea.toLowerCase();

    return(
        <>
            {/*Loopar över dom olika keysen och bygger divar med attributerna som finns i objekten.*/}
             <div key={keyProp} className={`pane ${style}`}>
                 <p>Task: {capitalizeFirstLetter(task)}</p>
                 <p>Work Area: {capitalizeFirstLetter(workArea)}</p>
                 <p>Assigned to: {capitalizeFirstLetter(name)}</p>
                 <button onClick={deleteTask}>Remove task</button>
             </div>
        </>
    )
}