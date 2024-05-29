import { useNavigate } from "react-router-dom";
import { register } from "../Utils/firebaseRegister.ts";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    
    //Lägger till en ny användare och visar när sidan laddas,om det gick fel och om det lyckades att lägga till. Redirectar sedan användaren tillbaka till scrumboarden.
    function addNewUser(event){
        const toastLoading = toast.loading("Registering...");
        event.preventDefault();
        event.target.reset();


        register(email,pw).then(() => {
            toast.update(toastLoading,{
                render:"Registration successful!",
                type:"success",
                isLoading:false,
                autoClose: 5000,
            });
            navigate("/")
        }).catch((error) => {
            toast.update(toastLoading,{
                render:error.message,
                type:"error",
                isLoading:false,
                autoClose:5000,
            });
        });

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