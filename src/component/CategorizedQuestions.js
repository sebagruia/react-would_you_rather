import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Question from "../component/Question";

const CategorizedQuestions = (props) => {
  const { users, questions, userName } = props;

  const [firstLink, setActivFirstLink] = useState("active");
  const [secondLink, setActivSecondLink] = useState("");

  const handleClick = () => {
    if (firstLink === "active") {
      setActivFirstLink("");
      setActivSecondLink("active");
    } else {
      setActivFirstLink("active");
      setActivSecondLink("");
    }
  };

  const selectUser = Object.values(users).filter(
    (user) => user.name === userName
  );
  
  // Questions are put in 2 categories: "answeredQuestions" and "unansweredQuestions" and are sorted in descending order
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
    <Fragment>
      <Card className="home">
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey="#unanswered-questions"
            className="home-links-container"
          >
            <Nav.Item>
              <Nav.Link
                onClick={handleClick}
                className={`nav-link ${firstLink}`}
              >
                Unanswered Questions
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={handleClick}
                className={`nav-link ${secondLink}`}
              >
                Answered Questions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {firstLink === "active"
            ? unansweredQuestions.map((question) => (
                <Question key={question.id} question={question} />
              ))
            : secondLink === "active"
            ? answeredQuestions.map((question) => (
                <Question
                  key={question.id}
                  question={question}
                  answered={true}
                />
              ))
            : null}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  questions: state.questionsReducer.questions,
  userName: state.usersReducer.loginField,
});

export default connect(mapStateToProps)(CategorizedQuestions);
