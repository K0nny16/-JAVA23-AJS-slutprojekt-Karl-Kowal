import { push, update } from "firebase/database";
import { todoRef } from "../../firebase/firebaseConfig";
import {CurrentUser} from "../CurrentUser.jsx";
import { useNavigate } from "react-router-dom";

export function HeadDiv({setIsLoggedIn,currentUser,setCurrentUser}){

    const navigate = useNavigate();

    let workArea="backend";
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

        const newID = push(todoRef).key;
        const newTask = {};
        newTask[newID] = {task,workArea};
        update(todoRef,newTask);
    }

    function registerUser(){
        navigate("/newUser")
    }


    return(
        <div id="head">
            <nav>
                <div className="nav-left">
                    <button onClick={registerUser}>Register user</button>
                </div>
                <CurrentUser setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </nav>
            <h1>Scrum Board</h1>
            <form onSubmit={postNewTask}>
                <input onChange={inputTask} type="text" placeholder="Beskriv problemet kort!" id="input" required></input>
                <select onChange={selectedOption} id="workArea" name="workArea">
                    <option value="backend">Dev Backend</option>
                    <option value="ux">UX</option>
                    <option value="frontend">Dev Frontend</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}