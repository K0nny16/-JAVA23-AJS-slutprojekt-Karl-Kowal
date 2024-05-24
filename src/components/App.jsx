import { BrowserRouter } from "react-router-dom";
import { BodyDiv } from "./body/BodyDiv.jsx";
import { HeadDiv } from "./head/HeadDiv.jsx";
export function App(){

    return(
        <BrowserRouter>
            <HeadDiv/> 
            <BodyDiv/>
        </BrowserRouter>
    )
}