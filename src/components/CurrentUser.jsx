import { useNavigate } from "react-router-dom";

export function CurrentUser({setIsLoggedIn,currentUser,setCurrentUser}){

    const navigate = useNavigate();

    function loggOut(){
        setIsLoggedIn(false);
        setCurrentUser("");
        navigate("/")
    }

    return(
        <div>
            <p>{currentUser} </p>
            <button onClick={loggOut}>Logg out</button>
        </div>
    )
}