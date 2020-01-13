import React from "react";

const Todo = props => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} />
      <p>{props.item.name}</p>
    </div>
  );
};
export default Todo;
