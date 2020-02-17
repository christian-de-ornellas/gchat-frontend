import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Create from "./pages/user/create";
import "./styles.css";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Header nameLogged="Christian Possidonio" />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/create-user">
                        <Create />
                    </Route>
                    <Route path="/login">
                        <div>
                            {" "}
                            <h1>LOGIN</h1>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
