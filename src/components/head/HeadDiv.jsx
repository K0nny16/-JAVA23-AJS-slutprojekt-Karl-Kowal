import { push, update } from "firebase/database";
import { todoRef } from "../../firebase/firebaseConfig";
import {NewUser} from "../NewUser.jsx";
import {CurrentUser} from "../CurrentUser.jsx";

export function HeadDiv({setIsLoggedIn}){

    let workArea="";
    let task ="";

    function selectedOption(event){
        workArea = event.target.value;
    }
    function inputTask(event){
        task = event.target.value;
    }

    //Skickar objectet med det nya tasket till firebase och sparar det i todo tabellen.
    function postNewTask(event){
        event.preventDefault();
        event.target.reset();

        if(!workArea){
            alert("Please chose a work area!");
            return;
        }

        const newID = push(todoRef).key;
        const newTask = {};
        newTask[newID] = {task,workArea};
        update(todoRef,newTask);
    }


    return(
        <div id="head">
            <h1>Scrum Board</h1>
            <CurrentUser/>
            <NewUser/>
            <form onSubmit={postNewTask}>
                <input onChange={inputTask} type="text" placeholder="Beskriv problemet kort!" id="input" required></input>
                <select onChange={selectedOption} id="workArea" name="workArea">
                    <option>Please chose a work area</option>
                    <option value="backend">Dev Backend</option>
                    <option value="ux">UX</option>
                    <option value="frontend">Dev Frontend</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}