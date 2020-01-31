import React, { Component } from "react";
import "./styles.css";

export default class Navigation extends Component {
    render() {
        return (
            <section className="txtMessage">
                <input
                    className="form-input"
                    type="text"
                    id="message"
                    placeholder="Escreva a sua mensagem..."
                />
                <button className="btnMessage">Enviar</button>
            </section>
        );
    }
}
