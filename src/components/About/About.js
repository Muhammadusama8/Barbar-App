import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="about-section-1">
          <div className="content-box-lg">
            <div className="container ">
              <div className="row  pl-4">
                <div className="col-md-6">
                  <div className="about-left">
                    <div className="vertical-heading">
                      <h5>Who We Are</h5>
                      <h2>
                        A <strong>Story</strong>
                        <br />
                        About Us
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-right">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12 text-center">
                  <div className="about-bottom-img mt-5">
                    <img
                      src="../Images/about.jpg"
                      alt="about-us"
                      className="img-responsive"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section-2 ">
          <div className="content-box-md">
            <div className="container ">
              <div className="row px-2">
                <div className="col-md-4 pb-3">
                  <div className="about-item text-center">
                    <i className="fa fa-rocket"></i>
                    <h3>Mission</h3>
                    <hr />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
                <div className="col-md-4 pb-3">
                  <div className="about-item text-center">
                    <i className="fa fa-eye"></i>
                    <h3>Vision</h3>
                    <hr />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-item text-center">
                    <i className="fa fa-pencil-alt"></i>
                    <h3>Passion</h3>
                    <hr />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
