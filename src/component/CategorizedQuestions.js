import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { Route, NavLink } from "react-router-dom";
import Question from "../component/Question";

const CategorizedQuestions = (props) => {
  const { users, questions, userName } = props;
  const selectUser = Object.values(users).filter(
    (user) => user.name === userName
  );

  const answeredQuestions = Object.values(questions)
    .filter(
      (question) =>
        question.optionOne.votes.includes(selectUser[0].id) ||
        question.optionTwo.votes.includes(selectUser[0].id)
    )
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  const unansweredQuestions = Object.values(questions)
    .filter(
      (question) =>
        !question.optionOne.votes.includes(selectUser[0].id) &&
        !question.optionTwo.votes.includes(selectUser[0].id)
    )
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  return (
    <Card className="home">
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey="#first"
          className="home-links-container"
        >
          <Nav.Item>
            <NavLink
              to="/questions/unanswered-questions"
              className="nav-link"
              activeClassName="active"
            >
              Unanswered Questions
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              to="/questions/answered-questions"
              className="nav-link"
              activeClassName="active"
            >
              Answered Questions
            </NavLink>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Route
          exact
          path="/questions/unanswered-questions"
          render={() => {
            return unansweredQuestions.map((question) => (
              <Question key={question.id} users={users} question={question} />
            ));
          }}
        />
        <Route
          exact
          path="/questions/answered-questions"
          render={() => {
            return answeredQuestions.map((question) => (
              <Question
                key={question.id}
                users={users}
                question={question}
                answered={true}
              />
            ));
          }}
        />
      </Card.Body>
    </Card>
  );
};
export default CategorizedQuestions;
