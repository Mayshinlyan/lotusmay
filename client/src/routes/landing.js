import React, { Component } from "react";
import {Link} from "react-router-dom"
import LazyLoad from "react-lazy-load";
import ContactMe from "../components/contactMe";
import Navbar from "../components/navbar";
import "../index.css";
import Card from "../components/card";

class landing extends Component {
  constructor(props) {
    super(props);
    this.about = React.createRef();
    this.service = React.createRef();
    this.contact = React.createRef();
  }

  scrollToMyRef = (ref) => {
    console.log("hey" + ref);
    switch (ref) {
      case "about":
        window.scrollTo(0, this.about.current.offsetTop);
        break;
      case "service":
        window.scrollTo(0, this.service.current.offsetTop);
        break;
      case "contact":
        window.scrollTo(0, this.contact.current.offsetTop);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Navbar scrollToMyRef={this.scrollToMyRef}/>
       
          <section className="row landingOne">
            <div className="col landingTitle">
              <h3>Hi, I'm</h3>
              <h1>May Shin Lyan</h1>
              {/* <h2>💼 Social Entrepreneurr</h2>
              <h2>🎨 Designer</h2>
              <h2>💻 Coder</h2> */}
            </div>
            {/* <div className="col-"></div> */}
          </section>

          <section className="row landing-about">
           
            <div
              className="landing-about-left container"
             
            >
              <h1>Welcome!</h1>

              <br></br>
              <p>
                My name is May. I am born and bred in Yangon, Myanmar 🇲🇲and currently residing in US.
                I am a social entrepreneur, coder and designer. My passion lies in using
                 technology to bring positive changes to the world. I
                care about people, the asthetics of the product I create and the
                impact it has on the world. I am the Co-founder and CEO of 
                <strong> <a href="https://www.bridgeburma.com" target="_blank">
                    BridgeBurma
                </a></strong>
                , an innovative educational platform for youths in Myanmar. I also work full time in <strong>Google</strong> as Cloud Technical Resident. 
              </p>

              <p >
                I am currently in the process of publishing
                a book titled, <strong> "Connecting the Dots - Build your life the way you want". </strong>
                If you would like to be the beta-reader or want to preorder a
                book{" "}
                <a href="https://hwai.typeform.com/to/kApfy3" target="_blank">
                  click here!
                </a>
              </p>

              <p >
                During my freetime, I also freelance as consultant for career building, startups, 
                creating websites and designs for my clients. As much as I
                care about my success, I want to help you acheive your goals.
                Check out my services below for more info. 👇
              </p>

              <p   ref={this.about}>
                You can follow me on{" "}
                <a href="https://twitter.com/May_Shin_Lyan" target="_blank">
                  Twitter
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/mayshinlyan/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                , and{" "}
                <a href="https://www.instagram.com/lotus_may_sl" target="_blank">
                  Instagram
                </a>
              </p>
            </div>
          </section>

          <section className="row landing-services" ref={this.service} >

            <div ><h1>Work With Me</h1></div>
            
            <Card
              title="Student Career"
              text="Need help reviewing your resume? Finding job?"
              href="https://hwai.typeform.com/to/Y3X4PipG"
              buttonText="Consult with Me"
              imageSrc="landing-services-career.jpg"
              
            ></Card>

            {/* <Card
              title="Coding"
              text="Need to build a website? Check out my projects."
              href="/coding"
              buttonText="Request Web Development"
              imageSrc="landing-services-coding.png"
            ></Card> */}


            <Card
              title="Entrepreneurship"
              text="Are you just planning to start your own startup? Need to sought advice?"
              href="https://hwai.typeform.com/to/Y3X4PipG"
              buttonText="Consult with Me"
              imageSrc="landing-services-entrepreneurship.png"
            ></Card>

            

            <Card
              title="Design"
              text="Want to request design project? Check out my projects"
              href="https://hwai.typeform.com/to/Y3X4PipG"
              buttonText="Request Design Project"
              imageSrc="landing-services-design.png"
            ></Card>

            <Card
              title="Blog"
              text="Want to build your enterpreneurship skill?"
              href="https://hwai.typeform.com/to/Y3X4PipG"
              buttonText="Sign up for Blog"
              imageSrc="landing-services-book.jpg"
            ></Card>
          </section>

          {/* <section className="row landing-design" ref={this.design}>
            <div className="col-5 landing-design-right"></div>
            <div className="col-6 landing-design-left"></div>
          </section>

          <section className="row landing-coding" ref={this.coding}>
            <div className="col-5 landing-coding-right"></div>
            <div className="col-6 landing-coding-left"></div>
          </section>

          <section className="row landing-writing" ref={this.writing}>
            <div className="col-5 landing-writing-right"></div>
            <div className="col-6 landing-writing-left"></div>
          </section> */}

          {/* <section className="row landing-contact" ref={this.contact}>
            <h1>Contact Me</h1>
            <ContactMe />
          </section> */}
          <section className="Footer">
            ©2020 May Shin Lyan
          </section>
        </div>
     
    );
  }
}

export default landing;
