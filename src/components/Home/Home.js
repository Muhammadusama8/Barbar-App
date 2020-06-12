import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <video autoPlay loop muted className="bg-css">
          <source src="../video/bg.mp4" />
          <source src="../video/bg.ogv" />
          <source src="../video/bg.webm" />
        </video>
        <div className="overlay-bg"></div>
        <div className="home-content text-center">
          <div className="home-content-inner">
            <div className="home-headings">
              <h1 className="heading-1">Modern</h1>
              <h1 className="heading-2">
                Creative <span>Barber's</span>
              </h1>
            </div>
            <div className="home-text">
              <p>
              “ Oh you cut your hair! What happened? Are you going through a breakup or something? "
              </p>
            </div>
            <div className="home-btn">
              <a
                className="btn btn-general btn-home"
                role="button"
                href="#team"
                title="Start Now"
              >
                Start Now 
              </a>
            </div>
          </div>
        </div>

        <a href="#team" className="arrow-down">
          <i className="fa fa-angle-down"></i>
        </a>
      </div>
    );
  }
}

export default Home;
