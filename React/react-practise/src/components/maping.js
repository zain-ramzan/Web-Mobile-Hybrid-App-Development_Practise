import React from 'react';
import '../App.css';
let todos = [{ name: "Zain" }, { name: "Saad" }];
class Maping extends React.Component {
  render() {
    return (
      <div>
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
