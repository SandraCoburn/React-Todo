// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";
import { tsAnyKeyword } from "@babel/types";

const TodoList = props => {
  // removeItem(e) {
  //     this.props.clearCompleted(task);
  // }
  const sortedList = props.todoList.sort((a, b) => a.completed - b.completed);
  return (
    <div className="todo-list">
      {props.todoList.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};
export default TodoList;
