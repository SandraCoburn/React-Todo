import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }
  //update state with each keystroke
  handleChanges = event => {
    this.setState({
      todoText: event.target.value
    });
  };
  //class property to submit form
  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.todoText);
    this.setState({
      todoText: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
