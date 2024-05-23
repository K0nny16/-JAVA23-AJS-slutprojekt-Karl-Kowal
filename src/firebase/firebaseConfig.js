import { initializeApp } from "firebase/app";
import { getDatabase,ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyARXU3MK-USTUKTLo7aBqVy-9WzNcD3l-Y",
  authDomain: "scrum-board-7e3d2.firebaseapp.com",
  databaseURL: "https://scrum-board-7e3d2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scrum-board-7e3d2",
  storageBucket: "scrum-board-7e3d2.appspot.com",
  messagingSenderId: "476196483267",
  appId: "1:476196483267:web:b87763c49315d074a03276"
};

//Exporterar referencerna till dom olika tabellerna i databasen.
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const todoRef = ref(db,"todo");
export const inprogressRef = ref(db,"inprogress");
export const doneRef = ref(db,"done");