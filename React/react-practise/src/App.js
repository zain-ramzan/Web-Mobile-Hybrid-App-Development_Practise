import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {set_data} from "./store/Action"

class App extends React.Component {
  render() {
    console.log("React-Redux Data ===>", this.props);
    return (
      <div>
        <button onClick={() => this.props.history.push("/")}>Reload</button>
        <button onClick={()=>this.props.set_Data()}>Redux-Data</button>
        <h1>React Js Practise</h1>
        <button onClick={() => this.props.history.push("/todo_application")}>Todo App</button>
        <button onClick={() => this.props.history.push("/maping")}>Maping</button>
        <button onClick={() => this.props.history.push("/state")}>State</button>
        <button onClick={() => this.props.history.push("/props")}>Props</button>

        {/*<Maping page="State Pages using Props" /> 
        <Learn page="State Pages using Props" />
        <Props message="This Props is from parent-to-child" />
        <Todos /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email
})

const mapDispatchToProps = (dispatch) => ({
  set_Data: ()=> dispatch(set_data())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
