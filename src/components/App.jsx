import { HashRouter, Routes,Route, Navigate, Link} from "react-router-dom";
import { ScrumBoard } from "./ScrumBoard.jsx";
import { Login } from "./Login.jsx";
import { useState } from "react";

export function App(){

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return(
        <HashRouter>
            <nav>
                <Link to="/"></Link>
                <Link to="/newUser"></Link>
            </nav>

            <Routes>
                <Route path="/" element={isLoggedIn ? (<ScrumBoard setIsLoggedIn={setIsLoggedIn} />) : (<Navigate to="/login" replace />)}/>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path="/newUser" element={isLoggedIn ? (<NewUser/>) : (<Navigate to="/login" replace/>)}/>
            </Routes>
        </HashRouter>
    )
}