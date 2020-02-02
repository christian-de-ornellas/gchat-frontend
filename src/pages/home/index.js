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

    async author() {
        const response = await api.get("/message/list");
        const author = response.data.messages.map(author => author.user.name);
        return author;
    }

    handleComment() {
        const { comment } = this.state;
        const message = comment.map(comment => {
            return (
                <div className="comment" key={comment._id}>
                    <small>{comment.user.name}</small>
                    <p>{comment.message}</p>
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
