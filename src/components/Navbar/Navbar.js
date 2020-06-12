import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  opensidebar = (e) => {
    document.getElementById("menu").style.width = "250px";
  };
  closesidebar = (e) => {
    document.getElementById("menu").style.width = "0px";
  };

  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-sm ">
        <i class="fas fa-cut icon pl-3"></i>
          <button
            class="navbar-toggler "
            type="button"
            data-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div id="mainbox" onClick={this.opensidebar}>
              &#9776;
            </div>
          </button>
          <div id="menu" className="sidemenu">
            
            <a  href="#home" onClick={this.closesidebar}>Home</a>
            <a href="#about" onClick={this.closesidebar}>About</a>
            <a href="#team" onClick={this.closesidebar}>Team</a>
            <a href="#contactus" onClick={this.closesidebar}>ContactUs</a>
            <button type="button"   class="btn btn-border-2 button-hover-2 ml-5 mt-5">Resume</button>
            <a href="#" class="closebtn" onClick={this.closesidebar}>
              &times;
            </a>
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
           
              <li class="nav-item nav-item-2 active">
                <a class="nav-link " href="#home">
                  Home
                </a>
              </li>
            
              <li class="nav-item nav-item-2 active">
                <a class="nav-link " href="#about">
                  About
                </a>
              </li>
          
              <li class="nav-item nav-item-2 active">
                <a class="nav-link " href="#team" >
                  Team
                </a>
              </li>
              <li class="nav-item nav-item-2 active">
                <a class="nav-link " href="#contactus" >
                  ContactUs
                </a>
              </li>
             
             
            </ul>
           
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
