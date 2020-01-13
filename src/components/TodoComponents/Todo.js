import React from "react";

const Todo = props => {
  const completedStyle = {
    fontSyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <input type="checkbox" checked={props.item.completed} />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.task}
      </p>
    </div>
  );
};
export default Todo;
