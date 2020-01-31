import React, { Component } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import "./styles.css";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header nameLogged="Christian Possidonio" />
                <Home />
                <Navigation />
            </div>
        );
    }
}
