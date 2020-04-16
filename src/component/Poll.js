import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { saveAnswerAction } from "../actions/saveAnswerAction";
import { receiveAllQuestionsAction } from "../actions/receiveAllQuestionsAction";
import Button from "react-bootstrap/Button";
import { withRouter, Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";


const Poll = (props) => {

  //props.location.state represents the props passed via Redirect (react-router-dom) from the Question project component
  console.log(props);
  const { userName, avatarUrl, question } = props.location.state;
  const { authedUser, dispatch } = props;

  const [redirect, setRedirect] = useState(false);
  const [inputValue, setInputValue] = useState("");


  // When this function is run, it sets the "redirect" variable to "true", saves the newly created question to the "fake" database using "saveAnswerAction" action and rerenders the questions from database using the "receiveAllQuestionsAction" action
  const redirectToPollResults = (event) => {
    event.preventDefault();
    if (inputValue) {
      setRedirect(true);
      dispatch(saveAnswerAction({ authedUser, qid: question.id, answer: inputValue }));
      dispatch(receiveAllQuestionsAction());
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Fragment>
      {redirect ? (
        <Redirect
          to={{
            pathname: `/pollresults/:${question.id}`,
            state: {
              userName: userName,
              avatarUrl: avatarUrl,
              question: question,
              questionId: question.id
            },
          }}
        />
      ) : (
          <div className="user poll">
            <div className="user-name">
              <h5>{userName} asks:</h5>
            </div>
            <div className="user-info-container-poll">
              <div className="image-container poll-image-container align-middle">
                <img src={avatarUrl} alt="avatar" />
              </div>

              <Form
                onSubmit={redirectToPollResults}
                className="question-container"
              >
                <h5>Would you rather...</h5>
                <div className="poll-first-question-container">
                  <div className="input-container">
                    <Form.Check
                      onChange={handleInputChange}
                      type="radio"
                      label={question.optionOne.text}
                      name="selection"
                      id="first-question-checkbox"
                      value="optionOne"
                    />
                  </div>
                </div>

                <div className="poll-second-question-container">
                  <div className="input-container">
                    <Form.Check
                      onChange={handleInputChange}
                      type="radio"
                      label={question.optionTwo.text}
                      name="selection"
                      id="second-question-checkbox"
                      value="optionTwo"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="outline-info"
                  className="view-poll-button btn-block"
                >
                  Vote
              </Button>
              </Form>
            </div>
          </div>
        )}
    </Fragment>
  );
};

export default withRouter(connect()(Poll)); //withRouter component from react-router-dom lets you acces the props passed via the Redirect component
