import React, { useState, Fragment } from "react";
import {  Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Question = (props) => {
  const { userName, avatarUrl, question } = props;
  const [redirect, setRedirect] = useState(false);

  const redirectToPoll = (event) => {
    event.preventDefault();
    setRedirect(true);
  };
  return (
    <Fragment>
      {redirect ? (
        <Redirect
          to={{
            pathname:"/questions/:question_id",
            state: {
              userName: userName,
              avatarUrl: avatarUrl,
              question: question,
            },
          }}
        />
      ) : (
        <div className="user">
          <div className="user-name">
            <h5>{userName} asks:</h5>
          </div>

          <div className="user-info-container">
            <div className="image-container align-middle">
              <img src={avatarUrl} alt="avatar" />
            </div>
            <div className="question-container">
              <h5>Would you rather</h5>
              <p>{question.optionOne.text}</p>
              <Button
                onClick={redirectToPoll}
                variant="outline-info"
                className="view-poll-button btn-block"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Question;
