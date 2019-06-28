import React, { Component } from "react";
import Axios from "axios";

class NewPost extends Component {
  state = {
    title: '',
    content: ''
  }

  createNewPost = () => {
    Axios.post('https://jsonplaceholder.typicode.com/posts/', this.state).then(
      () => {
        alert('Your post has been submitted successfully');
        this.props.history.push('/');
      })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className="container mt-4">
        <div className="form-group">
          <label>Post title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label>Post content</label>
          <textarea
            rows="3"
            className="form-control"
            name="content"
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <button type="button" className="btn btn-info" onClick={this.createNewPost}>
          Create Post
        </button>
      </form>
    );
  }
}

export default NewPost;
