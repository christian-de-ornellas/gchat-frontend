import React, { Component } from "react";
import "./styles.css";
import "../../services/api";
import api from "../../services/api";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    async handleSubmit(event) {
        try {
            event.preventDefault();
            const send = await api.post("/message/create", {
                user: "5e4a0cdcafd4153de631421d",
                message: this.state.value
            });
            return send;
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <section className="txtMessage">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Escreva a sua mensagem..."
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoFocus={true}
                    />

                    <button className="btnMessage" type="submit">
                        Enviar
                    </button>
                </form>
            </section>
        );
    }
}
