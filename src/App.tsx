import { Todo } from "./components/Todo";
import "./App.scss";
import { useEffect, useState } from "react";
import { Loaders } from "./components/Loaders";
import { TodoType } from "./types/Todo.types";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [error, setError] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((res) => setTodos(res.slice(0, 10)))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="App">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return <Todo todo={todo} />;
        })
      ) : (
        <Loaders />
      )}
    </div>
  );
}

export default App;
