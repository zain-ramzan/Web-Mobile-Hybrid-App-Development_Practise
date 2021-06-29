import React from 'react';
import '../App.css'


class Learn extends React.Component {
    constructor(){
        super()
        this.state = {
            name : "Hamza Ramzan",
            batch : "35",
            institute : "PIAIC"
        }
    }   
    // set_name = () => {
    //     this.setState({
    //         name: "Hamza"
    //     })
    // }



    //Create Function inside the constructor
        //Don't use Function keyword - Simply use function name e.g set_name

    // get_name = () => {
    //     console.log(this.state.name);
    // };


    render(){
        return(
            <div>
            <h2>State</h2>
            <h4>My name is {this.state.name}</h4>
            <h4>My Batch is: {this.state.batch}</h4>
            <h4>My Institute name is:{this.state.institute}</h4>
            <input type='text' placeholder="Enter your name" onChange={(e)=>this.setState({name: e.target.value})} /><br /><br/>
            <button onClick={this.set_name}>Set Student Name</button> <br/>
            <button onClick={this.get_name}>Get Student Detaile</button>
            </div>
        )
    } 
}
export default Learn;