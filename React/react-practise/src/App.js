import React from 'react';
import Maping from "./components/maping";
import Learn from "./components/state";
import './App.css';
import LearnProps from './components/props';
class App extends React.Component {
  
  get_data = (data) => {
    console.log(data)
  }
  
  render() {
    return (
      <div>
        <h1>React Practise</h1>
        <Maping page="State Pages using Props" />
        <Learn page="State Pages using Props" />
        <LearnProps message="This Props is from parent-to-child" getData={this.get_data} />
      </div>
    );
  }
}
export default App;
