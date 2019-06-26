import React from "react";
import { Link } from 'react-router-dom';

const navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Luan Nguyen Huu React Demo
    </a>
    <div className="collapse navbar-collapse ml-auto">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-post">
            New Post
          </Link>
        </li>
      </ul>
    </div>
    
  </nav>
);

export default navbar;
