import axios from "axios";
import React, { Component } from "react";

import Post from "./post/post";

import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    axios.get("/posts").then(
      response => {
        this.setState({ posts: response.data.slice(0, 6) });
      },
      error => {
        console.log(error);
      }
    );
  }

  postSelected = (id) => {
    this.setState({ selectedPostId: id })
  }

  render() {
    let posts = null;

    const style = {
      maxWidth: '18rem',
      minHeight: '300px'
    }

    posts = this.state.posts.map(post => {
      return (
        <Link to={'post/' + post.id} key={post.id} style={{ textDecoration: 'none' }}>
          <Post body={post.body} id={post.id} clicked={() => this.postSelected(post.id)} style={style} />
        </Link>
      )
    });

    return <div className="d-flex flex-wrap mt-4 container justify-content-center">{posts}</div>;
  }
}

export default Posts;
