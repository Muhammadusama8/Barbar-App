import React, { Component } from "react";
import "./Team.css";



class Team extends Component {

 
  render() {

    return (
      <div id="team">
        <div className="box-team">
          <div className="container pt-5 ">
            <div className="row pl-3">
              <div className="col-md-6">
                <div className="team-left">
                  <div className="vertical-heading">
                    <h5>Who We Are</h5>
                    <h2>
                      Meet Our <br /> <strong>Talent</strong>
                      Team
                    </h2>
                  </div>
                  <p className="pt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy  Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                </div>
              </div>
          
            </div>
          </div>
          <div className="body pt-5">
              <div className="container whole-container">
                  <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 "></div>
                  </div>
                  <div className="card ">
                      <div className="imgBx">
                          <img src="/Images/11.jpg"></img>
                      </div>
                      <div className="content">
                          <h2>John</h2>
                          <p> Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy </p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="imgBx">
                          <img src="/Images/22.jpg"></img>
                      </div>
                      <div className="content">
                          <h2>Mical</h2>
                          <p> Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy </p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="imgBx">
                          <img src="/Images/33.jpg"></img>
                      </div>
                      <div className="content">
                          <h2>barak</h2>
                          <p> Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy </p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="imgBx">
                          <img src="/Images/44.jpg"></img>
                      </div>
                      <div className="content">
                          <h2>yohana</h2>
                          <p> Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy </p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="imgBx">
                          <img src="/Images/55.jpg"></img>
                      </div>
                      <div className="content">
                          <h2>micheal</h2>
                          <p> Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy </p>
                      </div>
                  </div>
              </div></div>
        </div>
      </div>
    );
  }
}

export default Team;
