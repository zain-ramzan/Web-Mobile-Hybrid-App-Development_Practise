import React from 'react';
import '../App.css'


class Learn extends React.Component {
    constructor(){
        super()
        this.state = {
            name : "Zain Ramzan",
            email: "zain@gmail.com"
        }
    }   
    set_name = () => {
        this.setState({
            name: this.state.value
        })
    }
    getValue = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    //Create Function inside the constructor
        //Don't use Function keyword - Simply use function name e.g set_name

    // get_name = () => {
    //     console.log(this.state.name);
    // };


    render(){
        return(
            <div>
            {/* 
            <h4>My name is  {this.state.name}</h4>
            <h4>My Batch is: {this.state.batch}</h4>
            <h4>My Institute name is:{this.state.institute}</h4>
            <input type='text'onChange={(e)=>this.setState({name: e.target.value})} />
            <h3>-------</h3>
            <input type='text' onChange={(e)=>this.setState({value: e.target.value})} /><br/><br/>
            <button onClick={this.set_name}>Set Student Name</button> <br/>
            <button onClick={this.get_name}>Get Student</button> */}



            <h2>State</h2>
            <h3>Student Name: {this.state.name}</h3>
            <h3>Student Email: {this.state.email}</h3>
            <input 
                name="name" 
                text="text" 
                placeholder="Enter your Name..." 
                onChange={(e)=>this.getValue(e)} 
                />
            <br/>
            <br/>
            <input 
                name="email"  
                text="text" 
                placeholder="Enter your Email..." 
                onChange={(e)=>this.getValue(e)} 
            />





            </div>
        )
    } 
}
export default Learn;