import React from 'react';
import Maping from "./components/maping";
import Learn from "./components/state";
import './App.css';

function App() {
  return (
    <div>
      <h1>React Practise</h1>
      <Maping page="State Pages using Props"/>
      <Learn page="State Pages using Props" />
    </div>
  );
}

export default App;
