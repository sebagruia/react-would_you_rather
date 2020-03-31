import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { Route, NavLink } from "react-router-dom";
import Question from "../component/Question";

const CategorizedQuestions = props => {
  const { users, questions, selectUser } = props;

  const answeredQuestions = questions.filter(
    question =>
      question.optionOne.votes.includes(selectUser[0].id) ||
      question.optionTwo.votes.includes(selectUser[0].id)
  );
  const unansweredQuestions = questions.filter(
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
              to="/home/questions/unanswered-questions"
              className="nav-link"
              activeClassName="active"
            >
              Unanswered Questions
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              to="/home/questions/answered-questions"
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
          path="/home/questions/unanswered-questions"
          render={() => {
            return users.map(user => {
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
          path="/home/questions/answered-questions"
          render={() => {
            return users.map(user => {
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