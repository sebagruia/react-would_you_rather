import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { Route, NavLink } from "react-router-dom";
import Question from "../component/Question";

const CategorizedQuestions = props => {
  const { users, questions, userName } = props;
  const selectUser = Object.values(users).filter(
    (user) => user.name === userName
  );

  const answeredQuestions = Object.values(questions).filter(
    question =>
      question.optionOne.votes.includes(selectUser[0].id) ||
      question.optionTwo.votes.includes(selectUser[0].id)
  );
  const unansweredQuestions = Object.values(questions).filter(
    question =>
      !question.optionOne.votes.includes(selectUser[0].id) &&
      !question.optionTwo.votes.includes(selectUser[0].id)
  );
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
            return Object.values(users).map(user => {
              return unansweredQuestions.map(question => {
                return user.id === question.author ? (
                  <Question
                    key={question.id}
                    userName={user.name}
                    avatarUrl={user.avatarURL}
                    question={question}
                  />
                ) : null;
              });
            });
          }}
        />
        <Route
          exact
          path="/questions/answered-questions"
          render={() => {
            return Object.values(users).map(user => {
              return answeredQuestions.map(question => {
                return user.id === question.author ? (
                  <Question
                    key={question.id}
                    userName={user.name}
                    avatarUrl={user.avatarURL}
                    question={question}
                  />
                ) : null;
              });
            });
          }}
        />
      </Card.Body>
    </Card>
  );
};
export default CategorizedQuestions;
