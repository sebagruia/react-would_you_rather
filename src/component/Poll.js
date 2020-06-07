import React, { useState, Fragment } from "react";
import { withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { saveAnswerAction } from "../redux/actions/questions/saveAnswerAction";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



const Poll = (props) => {
  const { authedUser, questionUserName, questionUserAvatarUrl, question } = props.location.state;
  const { dispatch } = props;

  const [redirect, setRedirect] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // When this function is run, it sets the "redirect" variable to "true", saves the newly created question to the "fake" database using "saveAnswerAction" action and rerenders the questions from database using the "receiveAllQuestionsAction" action
  const redirectToPollResults = (event) => {
    event.preventDefault();
    if (inputValue) {
      dispatch(
        saveAnswerAction({ authedUser, qid: question.id, answer: inputValue })
      );
      setRedirect(true);
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
          pathname: `/pollresults/${question.id}`,
          state: {
            questionUserName: questionUserName,
            questionUserAvatarUrl: questionUserAvatarUrl,
            authedUser:authedUser,
            question: question,
          },
        }}
      />
    ) : (
        <div className="user poll">
          <div className="user-name">
            <h5>{questionUserName} asks:</h5>
          </div>
          <div className="user-info-container-poll">
            <div className="image-container poll-image-container align-middle">
              <img src={questionUserAvatarUrl} alt="avatar" />
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
