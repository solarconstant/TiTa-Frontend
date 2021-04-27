import React from "react";
import {  connect } from "react-redux";
import { Navbar, NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";

import "./teacherNav.css";
import logo from "./../logo.png";
import logoText from "./../logoText.png";
import Profile from "../../Profile/profile";


const TeacherNav = () => {

  
  return (
    <div>
      <Navbar light expand="lg">
        <Nav navbar className="flex-column">
          <NavItem>
            <Link className="logo2" to="#">
              <img className="logo-image2" src={logo} alt="logo" />
              <span className="logo-text2">
                {" "}
                <img src={logoText} alt="TITA" />
              </span>
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/teachtimetable">
              <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
              <span className="link-text"> Time table</span>
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/teacherclassrooms">
              <i className="fa fa-users fa-2x" aria-hidden="true"></i>
              <span className="link-text"> Classrooms</span>
            </Link>
          </NavItem>
          
        </Nav>
      </Navbar>
      
      <Profile />
    </div>
  );
};



export default connect()(TeacherNav);
