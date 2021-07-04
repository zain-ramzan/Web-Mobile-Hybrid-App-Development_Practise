import React from 'react';
import '../App.css'


class Learn extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Zain Ramzan",
            email: "zain"
        }
    }
    // set_name = () => {
    //     this.setState({
    //         name: this.state.value
    //     })
    // }/
    getValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    //Create Function inside the constructor
    //Don't use Function keyword - Simply use function name e.g set_name

    // get_name = () => {
    //     console.log(this.state.name);
    // };

    render() {
        console.log("Props --->", this.props);
        return (
            <div>
                <h1>React Practise</h1>
                <button onClick={() => this.props.history.push("/todo_application")}>Todo App</button>
                <button onClick={() => this.props.history.push("/maping")}>Maping</button>
                <button onClick={() => this.props.history.push("/props")}>Props</button>
                <h2>{this.props.page}</h2>
                <h3>Student Name: {this.state.name}</h3>
                <h3>Student Email: {this.state.email}@gmail.com</h3>
                <input
                    name="name"
                    text="text"
                    placeholder="Enter your Name..."
                    onChange={(e) => this.getValue(e)}
                />
                <br />
                <br />
                <input
                    name="email"
                    text="text"
                    placeholder="Enter your Email..."
                    onChange={(e) => this.getValue(e)}
                />
            </div>
        )
    }
}
export default Learn;