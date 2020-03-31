import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import { logAction } from "../actions/logAction";
import { setLoginUserAction } from "../actions/setLoginUserAction";
import {NavLink} from "react-router-dom";

const Navigation = props => {
  const { userName, avatarUrl } = props;

  const onClick = () => {
    props.dispatch(logAction(false));
    props.dispatch(setLoginUserAction(""));
  };

  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand>
          <img
            src="../../images/logo would you rather.png"
            className="d-inline-block align-top logo-image"
            width="30"
            height="30"
            alt="app logo"
          />
          Would You Rather?
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/home/questions/unanswered-questions" activeClassName="selected">
              <i className="fas fa-home"></i>
              Home
            </NavLink>
            <NavLink to="/leaderbord" activeClassName="selected">
              <i className="fas fa-medal"></i>
              Leaderboard
            </NavLink>
            <NavLink to="/add-question" activeClassName="selected">
              <i className="fas fa-plus-circle"></i>
              Add question
            </NavLink>
            <NavLink  to="/user" activeClassName="selected">
              <div className="nav-link-img-container">
              <img className="user-avatar" src={avatarUrl} alt="user avatar" />
             <p>Hello, {userName}</p> 
              </div>
            </NavLink>
            <NavLink to="/login" onClick={onClick}>
              <i className="fas fa-minus-circle"></i>
              LogOut
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    
    
  );
};

export default connect()(Navigation);
