import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import { logAction } from "../actions/logAction";
import { setLoginUserAction } from "../actions/setLoginUserAction";
import { Route, Link } from "react-router-dom";

const Navigation = props => {
  const { userName, avatarUrl } = props;

  const onClick = () => {
    props.dispatch(logAction(false));
    props.dispatch(setLoginUserAction(""));
  };


  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand to="#home">
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
            <Link to="/unanswered-questions">
              <img
                className=" icon-monster iconmonstr-home-thin"
                src="../../icons/iconmonstr-home-thin-240.png"
                alt="a medal"
              />
              Home
            </Link>
            <Link to="/leaderbord">
              <img
                className=" icon-monster iconmonstr-medal-icon"
                src="../../icons/iconmonstr-medal-3-240.png"
                alt="a medal"
              />
              Leaderboard
            </Link>
            <Link to="/add-question">
              <img
                className="icon-monster iconmonstr-circle-thin-icon"
                src="../../icons/iconmonstr-plus-circle-thin-240.png"
                alt="plus sign"
              />
              Add question
            </Link>
            <Link to="/user">
              <img className="user-avatar" src={avatarUrl} alt="user avatar" />
              Hello, {userName}
            </Link>
            <Link to="/logIn" onClick={onClick}>
              <img
                className="icon-monster iconmonstr-minus-circle-thin-icon"
                src="../../icons/iconmonstr-minus-circle-thin-240.png"
                alt="plus sign"
              />
              LogOut
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default connect()(Navigation);
