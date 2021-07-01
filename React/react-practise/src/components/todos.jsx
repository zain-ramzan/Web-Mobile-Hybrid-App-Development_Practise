import React from 'react';

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [{ title: "Zain Ramzan", edit: false }],
            value: ''
        }
    }
    get_todos = () => {
        let text = { title: this.state.value }
        this.setState({
            todos: [...this.state.todos, text],
            value: ""
        })
    }
    delete_list = (i) => {
        this.state.todos.splice(i, 1);
        this.setState({
            todos: this.state.todos
        })
    }
    edit_todo = (i) => {
        this.state.todos[i].edit = true
        this.setState({
            todos: this.state.todos
        })
    }
    handlechange = (e, i) => {
        this.state.todos[i].title = e.target.value
        this.setState({
            todos: this.state.todos
        })
    }
    update_todo = (i) => {
        this.state.todos[i].edit = false
        this.setState({
            todos: this.state.todos
        })
    }
    delete_all = () => {
        this.state.todos.splice(0)
        this.setState({
            todos: this.state.todos
        })
    }


    render() {
        let { todos, value } = this.state;
        return (
            <div>
                <h2>Todo List</h2>
                Enter the Todos - 
                <input type="text" placeholder="Enter the Value..." onChange={(e) => this.setState({ value: e.target.value })} value={value}/>
                <abbr title="Button Disabled! Please Enter the Value."><button disabled={!value} onClick={this.get_todos}>Add Todos</button></abbr>
                <abbr title="Button Disabled! Please Enter the Todos."><button disabled={todos == ""} onClick={this.delete_all}>Delete All</button> </abbr>
                <ul>
                    {todos.map((v, i) => {
                        return <li key={i}>{i + 1} -
                            {v.edit ? <input type="text" value={v.title} onChange={(e) => this.handlechange(e, i)} /> : v.title}
                            {v.edit ?
                                <button onClick={() => this.update_todo(i)}>Update</button>
                                :
                                <button onClick={() => this.edit_todo(i)}>Edit</button>
                            }
                            <button onClick={() => this.delete_list(i)}>Delete</button>
                        </li>
                    }
                    )}
                </ul>
            </div>
        )
    }
}
export default Todos;