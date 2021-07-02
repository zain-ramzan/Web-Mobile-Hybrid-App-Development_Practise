import React from 'react';
//components
// import Maping from "./components/maping";
// import Learn from "./components/state";
import './App.css';
// import LearnProps from './components/props';
// import Todos from './components/todos';
//React Router
class App extends React.Component {
  todo = () => {
    this.props.history.push("/todo")
  }

  render() {
    return (
      <div>
        <h1>React Practise</h1>
        <button onClick={this.todo}>Todo App</button>

        {/* <Maping page="State Pages using Props" /> 
        <Learn page="State Pages using Props" />
        <LearnProps message="This Props is from parent-to-child" getData={this.get_data} />
        <Todos /> */}
      </div>
    );
  }
}
export default App;
