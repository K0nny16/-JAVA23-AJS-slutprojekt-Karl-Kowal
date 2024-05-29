import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function CurrentUser({setIsLoggedIn,currentUser,setCurrentUser}){

    const navigate = useNavigate();

    function loggOut(){
        setIsLoggedIn(false);
        setCurrentUser("");
        navigate("/")
        toast.success(`${currentUser} is now logged out!`)
    }

    return(
        <div className="nav-right">
            <p>{currentUser} </p>
            <button onClick={loggOut}>Logg out</button>
        </div>
    )
}