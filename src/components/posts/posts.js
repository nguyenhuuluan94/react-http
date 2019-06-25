import Axios from 'axios';
import React, { Component } from 'react';

import Post from './post/post';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(
      response => {
        this.setState({ posts: response.data.slice(0, 6) });
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    let posts = null;
    
    posts = this.state.posts.map(post => {
      return <Post key={post.id} body={post.body} id={post.id} />;
    });

    return <div className="d-flex flex-wrap mt-4">{posts}</div>;
  }
}

export default Posts;
