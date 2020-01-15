import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const toDoList = [
  {
    task: "Make todo list",
    id: "123",
    completed: false
  },
  {
    task: "Update todo list",
    id: "124",
    completed: false
  },
  {
    task: "Delete todo list",
    id: "125",
    completed: false
  },
  {
    task: "Re do todo list",
    id: "126",
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: toDoList,
      life: 22
    };
  }

  toggleItem = id => {
    const newTodoList = this.state.todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    // update todo list
    this.setState({
      todos: newTodoList
    });
  };
  //Delete item fromt to do
  clearCompleted = () => {
    const deleteTodoItem = this.state.todos.filter(
      item => item.completed === false
    );
    this.setState({
      todos: deleteTodoItem
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>

        <TodoList
          todoList={this.state.todos}
          clearCompleted={this.clearCompleted}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
