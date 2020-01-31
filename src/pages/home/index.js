import React, { Component } from "react";
import "./style.css";

export default class Home extends Component {
    render() {
        return (
            <div className="content">
                <div className="comment">
                    <small>Pedro Lucas</small>
                    <p>Como vai você pai?</p>
                </div>
                <div className="comment">
                    <small>Christian Possidonio</small>
                    <p>Eu estou bem e você como vai?</p>
                </div>
                <div className="comment">
                    <small>Pedro Lucas</small>
                    <p>Eu também pai, mas e ae quando vamos tomar juízo?</p>
                </div>
            </div>
        );
    }
}
