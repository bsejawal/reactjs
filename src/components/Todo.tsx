import React, { useEffect, useState } from "react";
import { TodoType } from "../types/Todo.types";
interface Propes {
  todo: TodoType;
}

export const Todo: React.FC<Propes> = ({ todo }) => {
  return (
    <div className="main-container">
      {todo.title}
      <div>
        <button>{todo.completed ? "Completed" : "Incompleted"}</button>
      </div>
    </div>
  );
};
