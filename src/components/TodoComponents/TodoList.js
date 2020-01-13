// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import TodoForm from "./TodoForm";

const TodoList = props => {
  return (
    <div className="todo-list">
      <TodoForm />
    </div>
  );
};
export default TodoList;
