import React, { Component } from "react";
import "./style.css";
import api from "../../services/api";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: []
        };
    }

    async allComments() {
        const response = await api.get("/message/list");
        return this.setState({ comment: response.data.messages });
    }

    handleComment() {
        const { comment } = this.state;

        const message = comment.map(msg => {
            return (
                <div className="comment" key={msg._id}>
                    <small>{msg.name}</small>
                    <p>{msg.message}</p>
                </div>
            );
        });
        return message;
    }

    componentDidMount() {
        this.allComments();
        this.handleComment();
    }

    render() {
        return <div className="content">{this.handleComment()}</div>;
    }
}
