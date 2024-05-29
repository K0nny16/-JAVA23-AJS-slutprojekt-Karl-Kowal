import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebaseConfig.js";

export async function register(email:string,pw:string):Promise<UserCredential>{
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth,email,pw);
        return userCredentials;
    }catch{
        return Promise.reject(new Error("Something went wrong try again!"))
    }
}