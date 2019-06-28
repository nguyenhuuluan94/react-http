import React from "react";

const post = props => {
  let title = null;
  title = props.title ? props.title : `Post number ${props.id}`;
  
  return (
    <div
      className="card border-info mb-3 mr-3"
      style={props.style}
      onClick={props.clicked}
    >
      <div className="card-header bg-info text-white">{title}</div>
      <div className="card-body text-info">
        <p className="card-text">{props.body}</p>
      </div>
    </div>
  )
}

export default post;
