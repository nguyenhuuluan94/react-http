import React from 'react';

const post = (props) => (
  <div className="card border-info mb-3 mr-3" style={{maxWidth: '18rem'}}>
    <div className="card-header">Post #{props.id}</div>
    <div className="card-body text-info">
      <p className="card-text">
        {props.body}
      </p>
    </div>
  </div>
);

export default post;
