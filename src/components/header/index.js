import React, { Component } from "react";
import "./style.css";

export default class header extends Component {
    render() {
        return (
            <header>
                <div className="brand">
                    <h1>G Chat</h1>
                </div>
                <div className="logged">
                    <p>{this.props.nameLogged}</p>
                    <button>Logout</button>
                </div>
            </header>
        );
    }
}
