import React from 'react';
import '../App.css'
import Parent from "./p-to-c.png";
import Child from "./c-to-p.png"

class Props extends React.Component {
    render() {
        return (
            <div>
                <h1>React Practise</h1>
                <button onClick={() => this.props.history.push("/todo_application")}>Todo App</button>
                <button onClick={() => this.props.history.push("/maping")}>Maping</button>
                <button onClick={() => this.props.history.push("/state")}>State</button>
                <button onClick={() => this.props.history.push("/props")}>Props</button>

                <h2>Learn Props</h2>
                <h3>For Collecting data from <b>Parent to Child</b></h3>
                <p>
                    we have to send data, same like anchor take in HTML e.g <br></br>
                    <img src={Parent}/>
                </p>
                <hr style={{ width: 300 }}></hr>
                <h3>For Collecting data from <b>Child to Parent</b></h3>
                <p>
                    we have to send data, as a function in the element e.g <br></br>
                    <button onClick={()=>this.props.getData("This Props is from Child-to-Parent")}></button>
                    <img src={Child}/>
                </p>


                <button onClick={() => this.props.getData("This Props is from Child-to-Parent")}>Get Data</button>
            </div>
        )
    }
}

export default Props;