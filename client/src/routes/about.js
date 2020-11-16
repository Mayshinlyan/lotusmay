import React, { Component } from "react";
import LazyLoad from "react-lazy-load";

class about extends Component {
  render() {
    return (
      <div className="AboutOne">
        <h1>About Me</h1>
        <div className="row">
          <div className="col">
            <LazyLoad>
              <img src="" />
            </LazyLoad>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default about;
