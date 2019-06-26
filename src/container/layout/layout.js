import React from "react";
import { Route } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import Posts from "../../components/posts/posts";
import NewPost from "../../components/newpost/newpost";

const layout = () => (
  <div>
    <Navbar />
    <Route path="/new-post" component={NewPost} />
    <Route path="/" exact component={Posts} />
  </div>
);

export default layout;
