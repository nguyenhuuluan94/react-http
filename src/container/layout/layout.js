import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import Posts from "../../components/posts/posts";
import NewPost from "../../components/newpost/newpost";
import FullPost from "../../components/fullpost/fullpost";

const layout = () => (
  <div>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Posts} />
      <Route path="/new-post" component={NewPost} />
      <Route path="/:id" exact component={FullPost} />
    </Switch>
  </div>
);

export default layout;
