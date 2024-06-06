import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebaseConfig.js";

//Registrerar en ny användare på firebase och skickar ett rejected promise ifall något går fel.
export async function register(email:string,pw:string):Promise<UserCredential>{
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth,email,pw);
        return userCredentials;
    }catch(error){
        return Promise.reject(new Error("Something went wrong try again!"))
    }
}