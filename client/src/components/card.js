import React, { Component } from "react";

class card extends Component {
  render() {
    return (
      <div className="col services">
        <div class="card" style={{ width: "18rem", height: "29rem" }}>
          <img
            class="card-img-top"
            src={require("../image/" + this.props.imageSrc)}
            alt="Card image cap"
            style={{ height: "250px" }}
          />
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.text}</p>
            <a
              href={this.props.href}
              class="btn btn-primary"
              style={{ backgroundColor: "darkred" }}
            >
              {this.props.buttonText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default card;
