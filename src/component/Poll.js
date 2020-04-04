import React from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

const Poll = (props) => {
  //props.location.state represents the props passed via Redirect (react-router-dom) Component from the Question project component
  const { userName, avatarUrl, question } = props.location.state;
  return (
    <div className="user poll">
      <div className="user-name">
        <h5>{userName} asks:</h5>
      </div>
      <div className="user-info-container">
        <div className="image-container align-middle">
          <img src={avatarUrl} alt="avatar" />
        </div>
        <div className="question-container">
          <h5>Would you rather...</h5>
          <div className="first-question-container">
            <input
              id="first-question-checkbox"
              type="radio" aria-label="Radio button for following text input"
              value={question.optionOne.text}
            ></input>
            <label htmlFor="first-question-checkbox">
              {question.optionOne.text}
            </label>
          </div>
          <div className="second-question-container">
            <input
              id="second-question-checkbox"
              type="radio" aria-label="Radio button for following text input" value={question.optionTwo.text}
            ></input>
            <label htmlFor="second-question-checkbox">
              {question.optionTwo.text}
            </label>
          </div>

          <Button variant="outline-info" className="view-poll-button btn-block">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Poll); //withRouter component from react-router-dom lets you acces the props passed via the Redirect component
