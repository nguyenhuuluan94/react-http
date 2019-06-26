import React from "react";



const navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Luan Nguyen Huu React Demo
    </a>
    <div className="collapse navbar-collapse ml-auto">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/new-post">
            New Post
          </a>
        </li>
      </ul>
    </div>
    
  </nav>
);

export default navbar;
