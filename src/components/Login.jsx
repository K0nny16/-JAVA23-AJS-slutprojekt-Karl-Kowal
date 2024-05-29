import { useNavigate } from "react-router-dom";
import { login } from "../Utils/firebaseAuth.ts";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Login({setIsLoggedIn,setCurrentUser}){
    const navigate = useNavigate();
    
    
    let email;
    let pw;
    
    function inputPw(event){
        pw = event.target.value.trim();
    }
    
    function inputEmail(event){
        email = event.target.value.trim();
    }
    
    function handleLogin(event){
        const toastID = toast.loading("Logging in...")
        event.preventDefault();
        event.target.reset();
        
        //Hanterar ifall promiset blir resolvat eller rejectat. Visar även upp det grafiskt för användaren. Redirectar sedan användaren till scrumboarden.
        login({email,pw}).then(() =>{
        toast.update(toastID,{
            render:"Login successful!",
            type:"success",
            isLoading:false,
            autoClose: 5000,
        });
        setIsLoggedIn(true);
        setCurrentUser(email);
        navigate("/");        
        }).catch((error) => {
        toast.update(toastID,{
            render:error.message,
            type: "error",
            isLoading:false,
            autoClose: 5000,
        });
    });
}


    return(
    <div className="login-form">
        <h2>Login Page!</h2>
        <form onSubmit={handleLogin}>
            <label>Email adress</label>
            <input onChange={inputEmail} type="text" id="email" required></input>
            <label>Password</label>
            <input onChange={inputPw} type="password" id="password" required></input>
            <button type="submit">Login</button>
        </form>
    </div>
    )
}