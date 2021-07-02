import React from 'react';
import '../App.css'

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
                    &lt;<b style={{ color: 'lightgreen' }}>App</b>  <i>message="This is the message."</i>/&gt;
                </p>
                <hr style={{ width: 300 }}></hr>
                <h3>For Collecting data from <b>Child to Parent</b></h3>
                <p>
                    we have to send data, as a function in the element e.g <br></br>
                    {/* &lt;<b style={{ color: 'lightgreen' }}>button</b> <i>onClick={this.props.getData("This Props is from Child-to-Parent")}</i> &gt;&lt;<b style={{ color: 'lightgreen' }}>button</b>&gt; */}
                </p>


                <button onClick={() => this.props.getData("This Props is from Child-to-Parent")}>Get Data</button>
            </div>
        )
    }
}

export default Props;