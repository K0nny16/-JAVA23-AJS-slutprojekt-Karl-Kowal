import { onValue } from "firebase/database";
import { todoRef } from "../../../firebase/firebaseConfig.js";
import { useEffect, useState } from "react";
import { TodoPane } from "./TodoPane.jsx";

export function Todo() {
  const [todoList, setTodoList] = useState({});

  //Hämtar datan från den valda tabellen (todo) och updaterar statet när databasen updateras.
  useEffect(() => {
    try {
      onValue(todoRef, (snapshot) => {
        const data = snapshot.val();
        setTodoList(data);
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  }, []);

  //Tar varje task och bygger en todopane komponent med egenskaperna från objektet.
  return (
    <div className="column">
      <h2>Todo</h2>
      {Object.keys(todoList).map((key) => {
        const task = todoList[key];
        return (
          <TodoPane task={task.task} workArea={task.workArea} keyProp={key} />
        );
      })}
    </div>
  );
}
