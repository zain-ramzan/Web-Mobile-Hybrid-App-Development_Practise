import React from 'react';
import '../App.css';
let todos = [{ name: "Zain" }, { name: "Saad" }];
class Maping extends React.Component {
  render() {
    return (
      <div>
        <h1>React Practise</h1>
        <button onClick={() => this.props.history.push("/todo_application")}>Todo App</button>
        <button onClick={() => this.props.history.push("/maping")}>Maping</button>
        <button onClick={() => this.props.history.push("/state")}>State</button>
        <button onClick={() => this.props.history.push("/props")}>Props</button>

        <h2>Maping</h2>
        <ul>
          {todos.map((item, index) => {
            return (
              <li key={index}>{item.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Maping;
