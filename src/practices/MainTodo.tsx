import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "../types/todo";

export const MainTodo = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <p>todoの取得</p>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  )
}