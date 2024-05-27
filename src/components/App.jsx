import { BrowserRouter, Routes,Route, Navigate, useNavigate} from "react-router-dom";
import { ScrumBoard } from "./ScrumBoard.jsx";
import { Login } from "./Login.jsx";
import {useEffect, useState} from "react";

export function App(){

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(() =>{
        if(isLoggedIn){
        // ??????? Fråga om hjälp imorgon.
        }
    },[isLoggedIn]);
    

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn ? (<ScrumBoard />) : (<Navigate to="/login" replace />)}/>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            </Routes>
        </BrowserRouter>
    )
}