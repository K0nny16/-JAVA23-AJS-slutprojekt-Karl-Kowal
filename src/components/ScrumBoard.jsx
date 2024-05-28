import { BodyDiv } from "./body/BodyDiv.jsx";
import { HeadDiv } from "./head/HeadDiv.jsx";

export function ScrumBoard({setIsLoggedIn}){
    return(
        <>
            <HeadDiv setIsLoggedIn={setIsLoggedIn}/>
            <BodyDiv/>
        </>
    )
}