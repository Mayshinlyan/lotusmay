import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import Navbar from "../components/navbar";

class entrepreneurship extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className="row ent-main">
          <div className="col-5 ent-right">
            {" "}
            <LazyLoad width={100}>
              <img
                className="landing-about-image"
                src={require("../image/ent-2.jpeg")}
              />
            </LazyLoad>
          </div>
          <div className="col-7 ent-left container">
            <h1>May Shin Lyan</h1>

            <p>
              May is passionate about entrepreneurship and has been involved in
              a number of technical, social and educational startups. She has
              also co-founded her own startup, BridgeBurma, the most innovative
              education platform for Burmese community.
            </p>
          </div>
        </section>
        <section className="row ent-bb">
          <div className="col-6 ent-bb-right container">
            <h1>BridgeBurma</h1>
            <p>
              <a href="https://www.bridgeburma.com" target="_blank">
                BridgeBurma
              </a>
              &nbsp; was started as a passion project in the summer of 2018. I
              want to help the people in my country but geographical barrier
              prevented me from doing so. So I made a resolution.
            </p>

            <q className="quote">
              If there is no way to help Myanmar from abroad, then I will create
              one!
            </q>

            <p style={{ marginTop: "1em" }}>
              Now BridgeBurma is offering services such as Ask and Answer
              question on forum, Mentor Matching, and Read and Write articles.
            </p>

            <p>
              In its infancy, BridgeBurma was a small organization with just
              five employees. But, in just two short years, it has grown
              eight-fold to 18 core employees and 22 mentors.
            </p>
          </div>
          <div className="col-5 ent-bb-left">
            <LazyLoad>
              <img
                className="landing-about-image"
                src={require("../image/ent-1.png")}
              />
            </LazyLoad>
          </div>
        </section>

        <section className="row ent-greencode">
          <div className="container">
            <h1>Green Code</h1>
            <img
              style={{ height: "20em" }}
              src={require("../image/ent-greencode-1.png")}
            />
          </div>

          <p className="container">
            Greencode is an app that encourages users to recycle plastic bottles
            by providing them green coins when the recycled bottle is scanned.
            The green coins can be exchanged into actual product like T-shirt
            later in the marketplace.
          </p>
        </section>

        <section className="row ent-contact">
          <div className="container">
            <h1>
              Need help in finding product market fit? Got issues in building
              the startup?
            </h1>
            <a
              class="btn btn-primary"
              style={{
                marginTop: "2em",
                backgroundColor: "white",
                color: "darkred",
                fontSize: "2em",
              }}
            >
              Consult with May
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default entrepreneurship;
