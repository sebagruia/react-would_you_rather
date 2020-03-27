import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Question from "../component/Question";

const Home = () => {
  return (
    <Card className="home">
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey="#first"
          className="home-links-container"
        >
          <Nav.Item>
            <Nav.Link href="#first">Unanswered Questions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Answered Questions</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Question />
      </Card.Body>
    </Card>
  );
};

export default Home;
