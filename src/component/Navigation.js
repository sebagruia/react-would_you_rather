import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = (props) => {
  const{logIn, userName} = props;

  return (
    
      <Navbar bg="light" expand="lg" className={`${logIn ? null : 'hidden'}`}>
        <div className="container">
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#Home" >
              <img
                className=" icon-monster iconmonstr-home-thin"
                src="../../icons/iconmonstr-home-thin-240.png"
                alt="a medal"
              />
              Home
            </Nav.Link>
            <Nav.Link href="#Leaderbord" >
              <img
                className=" icon-monster iconmonstr-medal-icon"
                src="../../icons/iconmonstr-medal-3-240.png"
                alt="a medal"
              />
              Leaderboard
            </Nav.Link>
            <Nav.Link href="#link" >
              <img
                className="icon-monster iconmonstr-circle-thin-icon"
                src="../../icons/iconmonstr-plus-circle-thin-240.png"
                alt="plus sign"
              />
              Add question
            </Nav.Link>
            <Nav.Link href="#link" >
              <img
                className="user-avatar"
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Side&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=DarkBrown"
                alt="user avatar"
              />
              Hello, {userName}
            </Nav.Link>
            <Nav.Link href="#link" >
              <img
                className="icon-monster iconmonstr-circle-thin-icon"
                src="../../icons/iconmonstr-plus-circle-thin-240.png"
                alt="plus sign"
              />
              LogOut
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
   
  );
};

export default Navigation;
