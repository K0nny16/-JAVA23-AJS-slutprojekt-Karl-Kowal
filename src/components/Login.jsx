import { redirect } from "react-router-dom";
import { login } from "../Utils/firebaseAuth.ts";

export function Login({setIsLoggedIn}){
    
    function handleLogin(event){
        event.preventDefault();
        const email = document.querySelector("#email").value.trim();
        const pw = document.querySelector("#password").value.trim();       
        document.querySelector("form").reset();        

        const userCredentials = login({email,pw});
        userCredentials.then(() =>{
            setIsLoggedIn(true);
            console.log(userCredentials);
        }).catch((error) => {
            alert(error.message)
        });
    }


    return(
    <div className="login-form">
        <h2>Login Page!</h2>
        <form onSubmit={handleLogin}>
            <label>Email adress</label>
            <input type="text" id="email" required></input>
            <label>Password</label>
            <input type="password" id="password" required></input>
            <button type="submit">Login</button>
        </form>
    </div>
    )
}