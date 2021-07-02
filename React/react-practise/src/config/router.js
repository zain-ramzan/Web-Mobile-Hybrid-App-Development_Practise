import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Maping, Props, State, Todos } from '../components/';
import Todos from '../components/todos';
// import Maping from '../components/maping'

import App from '../App';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App} />
                <Route exact path="/maping" component={Maping} />
                <Route exact path="/props" component={Props} />
                <Route exact path="/state" component={State} />
                <Route exact path="/todos_application" component={Todos} />
            </Router>
        )
    }
}
export default AppRouter;