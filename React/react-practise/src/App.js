import React from 'react';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Practise</h1>
        <button onClick={()=>this.props.history.push("/todo_application")}>Todo App</button>
        <button onClick={()=>this.props.history.push("/maping")}>Maping</button>
        <button onClick={()=>this.props.history.push("/state")}>State</button>
        <button onClick={()=>this.props.history.push("/props")}>Props</button>

         {/*<Maping page="State Pages using Props" /> 
        <Learn page="State Pages using Props" />
        <Props message="This Props is from parent-to-child" />
        <Todos /> */}
      </div>
    );
  }
}
export default App;
