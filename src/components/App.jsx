import { HashRouter, Routes,Route, Navigate, Link} from "react-router-dom";
import { ScrumBoard } from "./ScrumBoard.jsx";
import { Login } from "./Login.jsx";
import { useState } from "react";
import { NewUser } from "./NewUser.jsx";
import { ToastContainer } from "react-toastify";

export function App(){

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [currentUser,setCurrentUser] = useState("");


    return(
        <HashRouter>
            <nav>
                <Link to="/"></Link>
                <Link to="/newUser"></Link>
            </nav>

            <Routes>
                <Route path="/" element={isLoggedIn ? (<ScrumBoard setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />) : (<Navigate to="/login" replace />)}/>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>}/>
                <Route path="/newUser" element={isLoggedIn ? (<NewUser/>) : (<Navigate to="/login" replace/>)}/>
            </Routes>
            <ToastContainer/>
        </HashRouter>
    )
}