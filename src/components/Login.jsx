import { useNavigate } from "react-router-dom";
import { login } from "../Utils/firebaseAuth.ts";

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
        event.preventDefault();
        event.target.reset();

        //Hanterar ifall promiset blir resolvat eller rejectat.
        const userCredentials = login({email,pw});
        userCredentials.then(() =>{
            setIsLoggedIn(true);
            setCurrentUser(email);
            navigate("/");
        }).catch((error) => {
            alert(error.message)
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