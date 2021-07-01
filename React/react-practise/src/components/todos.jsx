import React from 'react';

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: ["Zain"],
            value: ''
        }
    }
    get_todos = () => {
        this.setState({
            todos: [...this.state.todos, this.state.value],
            value: ""
        })
    }

    render() {
        let { todos, value } = this.state;
        return (
            <div>
                <h2>Todo List</h2>
                <input 
                    type="text" 
                    placeholder="Enter the Value..." 
                    onChange={(e) => this.setState({ value: e.target.value })} 
                    value={value} 
                    /> 
                    

                <button 
                onClick={this.get_todos}>Add Todos</button>
                <ul>
                    {todos.map((v, i) => {
                        return <li>{i} - {v}</li>
                    }
                    )}
                </ul>
            </div>
        )
    }
}
export default Todos;