import { useNavigate } from "react-router-dom";

export function NewUser(){

    const navigate = useNavigate();
    
    let email="";
    let pw="";

    function inputEmail(event){
        email = event.target.value.trim();
    }

    function inputPw(event){
        pw = event.target.value.trim();
    }
    
    function addNewUser(event){
        event.preventDefault();
        event.target.reset();

        //Kod för att lägga till användare.

        navigate("/");
    }
    
    return(
        <div className="login-form">
            <h2>Create a new user!</h2>
            <form onSubmit={addNewUser}>
                <label>Email address</label>
                <input type="text" required onChange={inputEmail}></input>
                <label>Password</label>
                <input type="text" required onChange={inputPw}></input>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}