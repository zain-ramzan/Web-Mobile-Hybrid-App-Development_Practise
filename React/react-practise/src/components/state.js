import React from 'react';
import '../App.css'


class Learn extends React.Component {
    constructor(){
        super()
        this.state = {
            name : "Zain Ramzan",
            batch : "35",
            institute : "PIAIC"
        }
    }   


    //Create Function inside the constructor
        //Don't use Function keyword - Simply use function name e.g set_name
    set_name = () => {
        console.log(this.state.name);
        console.log(this.state.batch);
        console.log(this.state.institute);
        console.log("-------------------");
    };


    render(){
        return(
            <div>
            <h2>State</h2>
            <h4>My name is {this.state.name}</h4>
            <h4>My Batch is: {this.state.batch}</h4>
            <h4>My Institute name is:{this.state.institute}</h4>
            <button onClick={this.set_name}>Get Student Detaile</button>
            </div>
        )
    } 
}
export default Learn;