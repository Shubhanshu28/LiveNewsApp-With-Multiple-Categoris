import React, { Component } from "react";
export default class Newsmonkey extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                {source} 
                
              </span>
              ...
            </h5>
            <p className="card-text">{description}....</p>
            <p className="card-text">
              <small className="text-muted">
                By{!author ? "Unkown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn -sm  btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
