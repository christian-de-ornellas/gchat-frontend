import React, { Component } from "react";
import "./style.css";
import api from "../../services/api";
import Navigation from "../../components/navigation";

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

    async removeComment(messageId, userId) {
        try {
            const remove = await api.delete(
                `message/remove/${messageId}/${userId}`
            );
            return remove;
        } catch (error) {
            console.log(error);
        }
    }

    handleComment() {
        const { comment } = this.state;
        const message = comment.map(comment => {
            return (
                <div className="comment" key={comment._id}>
                    <small>{comment.user.name}</small>
                    <p>{comment.message}</p>
                    <button
                        className="btn-remove"
                        onClick={() => {
                            this.removeComment(comment._id, comment.user._id);
                        }}
                    >
                        Excluir
                    </button>
                </div>
            );
        });
        return message;
    }

    componentDidUpdate() {
        this.allComments();
    }

    componentDidMount() {
        this.handleComment();
        this.allComments();
    }

    render() {
        return (
            <div>
                <div className="content">{this.handleComment()}</div>
                <div className="navigation-message">
                    <Navigation />
                </div>
            </div>
        );
    }
}
