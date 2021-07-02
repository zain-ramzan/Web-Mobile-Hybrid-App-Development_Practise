import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Maping from "../components/maping"
import State from "../components/state"
import Props from "../components/props"
import Todos from "../components/todos"
import App from '../App';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={App} />
                <Route exact path="/maping" component={Maping} />
                <Route exact path="/props" component={Props} />
                <Route exact path="/state" component={State} />
                <Route exact path="/todo_application" component={Todos} />
            </Router>
        )
    }
}
export default AppRouter;