import React from 'react';

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: ["Zain", "Hamza", "Saad"]
        }
    }

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <input type="text" placeholder="Enter the Value..." onChange={(e)=>console.log(e.target.value)} />
                <ul>
                    {this.state.todos.map((v, i) => {
                        return <li>{i} - {v}</li>
                    }
                    )}
                </ul>
            </div>
        )
    }
}
export default Todos;