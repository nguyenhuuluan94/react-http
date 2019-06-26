import React, { Component } from "react";

class NewPost extends Component {
  render() {
    return (
      <form className="container mt-4">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Post title</label>
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Post content</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-info">
          Create Post
        </button>
      </form>
    );
  }
}

export default NewPost;
