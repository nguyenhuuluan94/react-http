import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import FullPost from '../../components/fullpost/fullpost';
import Navbar from '../../components/navbar/navbar';
import NewPost from '../../components/newpost/newpost';
import Posts from '../../components/posts/posts';

class Layout extends Component {
  state = {
    isAuth: true
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Posts} />
          {this.state.isAuth ?
            <Route path="/new-post" component={NewPost} /> :
            <Fragment><h1 className="text-center">Please login</h1></Fragment>
          }
          <Route path="/post/:id" exact component={FullPost} />
          {/* <Route render={() => <h1 className="text-center">Page Not Found</h1>} /> */}
        </Switch>
      </div>
    )
  }
}

export default Layout;
