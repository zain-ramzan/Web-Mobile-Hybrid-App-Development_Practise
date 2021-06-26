import React from 'react';
import Maping from "./components/maping";
import Learn from "./components/state";
import './App.css';

function App() {
  let todos = [{name:"Zain"},{name:"Saad"}]
  return (
    <div>
      <h1>React Practise</h1>
      <Maping />
      <Learn />
    </div>
  );
}

export default App;
