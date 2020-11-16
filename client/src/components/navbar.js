import React, { Component } from "react";
import "../index.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="./" target="_blank">
            <img src={logo} width="30" height="30" alt="Post" />
          </a>
          <Link to="/" className="navbar-brand">
            May Shin Lyan
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                <Link
                  className="nav-link"
                  onClick={() => this.props.scrollToMyRef("about")}
                >
                  About
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  className="nav-link"
                  onClick={() => this.props.scrollToMyRef("service")}
                >
                  Work With Me
                </Link>
              </li>
              <li className="navbar-item">
                {/* <Link
                  onClick={() => this.props.scrollToMyRef("contact")}
                  className="nav-link"
                >
                  Contact Me
                </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
