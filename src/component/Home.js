import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Question from "../component/Question";

const Home = props => {
  const { users, userName, questions } = props;
  console.log(users);

  const selectUser = users.filter(user => user.name === userName);
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
          <LinkContainer to="/unanswered-questions">
            <Nav.Item>
              <Nav.Link href="#first">Unanswered Questions</Nav.Link>
            </Nav.Item>
          </LinkContainer>

          <LinkContainer to="/answered-questions">
            <Nav.Item>
              <Nav.Link href="#second">Answered Questions</Nav.Link>
            </Nav.Item>
          </LinkContainer>
          
        </Nav>
      </Card.Header>
      <Card.Body>
        <Route
          path="/unanswered-questions"
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
          path="/answered-questions"
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

export default Home;
