import { BodyDiv } from "./body/BodyDiv.jsx";
import { HeadDiv } from "./head/HeadDiv.jsx";

export function ScrumBoard({setIsLoggedIn,currentUser,setCurrentUser}){
    return(
        <>
            <HeadDiv setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <BodyDiv/>
        </>
    )
}