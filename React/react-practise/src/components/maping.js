import React from 'react';
import '../App.css';

function Maping() {
  let todos = [{name: "Hamza"},{name:"Zain"},{name:"Saad"}]
  return (
    <div>
      <h2>Maping</h2>
      <ul>
        {todos.map((item,index)=>{
          return(
            <li key={index}>{item.name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Maping;
