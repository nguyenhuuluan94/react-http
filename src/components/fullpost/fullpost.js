import axios from 'axios';
import React, { Component } from 'react';
import Post from '../posts/post/post';

import "./fullpost.css";

class FullPost extends Component {
    state = {
        loadedPost: null,
        favorite: false
    }

    componentDidMount() {
        // log props property to see which data it stores
        console.log(this.props);

        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    back = () => {
        this.props.history.goBack();
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

        if (this.state.loadedPost) {
            post = (
                <div className="container justify-content-center mt-4">
                    <Post id={this.state.loadedPost.id} body={this.state.loadedPost.body} title={this.state.loadedPost.title}></Post>
                    <div className="text-center">
                        <button onClick={this.back} className="fullpost-button btn btn-success">Back</button>
                        <button onClick={this.deletePostHandler} className="fullpost-button btn btn-danger">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;