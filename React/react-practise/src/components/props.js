import React from 'react';
import '../App.css'

class LearnProps extends React.Component {
    render() {
        return (
            <div>
                <h1>React Practise</h1>
                <button onClick={() => this.props.history.push("/todo_application")}>Todo App</button>
                <button onClick={() => this.props.history.push("/maping")}>Maping</button>
                <button onClick={() => this.props.history.push("/state")}>State</button>
                <button onClick={() => this.props.history.push("/props")}>Props</button>

                <h2>Learn Props</h2>
                <h4>1st : {this.props.message}</h4>
                <button onClick={() => this.props.getData("This Props is from Child-to-Parent")}>Get Data</button>
            </div>
        )
    }
}

export default LearnProps;