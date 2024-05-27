import { HashRouter, Routes,Route, Navigate, useNavigate, Link} from "react-router-dom";
import { ScrumBoard } from "./ScrumBoard.jsx";
import { Login } from "./Login.jsx";
import { useState } from "react";

export function App(){

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return(
        <HashRouter>
            <nav>
                <Link to="/"></Link>
            </nav>

            <Routes>
                <Route path="/" element={isLoggedIn ? (<ScrumBoard />) : (<Navigate to="/login" replace />)}/>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            </Routes>
        </HashRouter>
    )
}