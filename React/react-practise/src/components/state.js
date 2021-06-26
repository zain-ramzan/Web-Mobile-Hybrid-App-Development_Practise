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
    render(){
        return(
            <div>
            <h2>State</h2>
            <h4>My name is {this.state.name}</h4>
            <h4>My Batch is: {this.state.batch}</h4>
            <h4>My Institute name is:{this.state.institute}</h4>
            </div>
        )
    } 
}
export default Learn;