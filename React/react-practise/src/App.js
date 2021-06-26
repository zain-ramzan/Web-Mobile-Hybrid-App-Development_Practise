import React from 'react';
import Maping from "./components/maping"
import './App.css';

function App() {
  let todos = [{name:"Zain"},{name:"Saad"}]
  return (
    <div>
      <h1>React Practise</h1>
      <Maping />
    </div>
  );
}

export default App;
