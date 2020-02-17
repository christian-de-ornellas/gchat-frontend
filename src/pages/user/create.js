import React, { Component } from "react";
import "./style.css";
import api from "../../services/api";

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nickname: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.name,
            nickname: event.target.nickname
        });
    }

    async handleSubmit(event) {
        try {
            event.preventDefault();
            const send = await api.post("/user/create", {
                name: this.state.name,
                nickname: this.state.nickname
            });
            this.setState({ name: "", nickname: "" });
            return send;
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <section className="form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Seu nome..."
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apelido</label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Seu login..."
                            value={this.state.nickname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btnMessage">
                            Salvar
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}
