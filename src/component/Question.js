import React, {Fragment, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Question = (props) => {
  const { users, question, answered } = props;

  const [redirect, setRedirect] = useState(false);

  const redirectToPoll = (event) => {
    event.preventDefault();
    setRedirect(true);
  };

  const selectUser = Object.values(users).filter(
    (user) => user.id === question.author
  );

  return (
    <Fragment>
      {/* If "redirect" variable is "true" and the "answered" prop was not passed from parent then the page is redirected to "Poll" page */}
      {redirect && !answered ? (
        <Redirect
          to={{
            pathname: `/poll/${question.id}`,
            state: {
              userName: selectUser[0].name,
              avatarUrl: selectUser[0].avatarURL.name,
              question: question
            },
          }}
        />
      /* If "redirect" variable is "true" and the "answered" prop was passed from parent then the page is redirected to "PollResults" page */
      ) : redirect && answered ? (
        <Redirect
          to={{
            pathname: `/pollresults/${question.id}`,
            state: {
              userName: selectUser[0].name,
              avatarUrl: selectUser[0].avatarURL.name,
              question: question
            },
          }}
        />
      ) : (
        <div className="user">
          <div className="user-name">
            <h5>{selectUser[0].name} asks:</h5>
          </div>

          <div className="user-info-container">
            <div className="image-container align-middle">
              <img src={selectUser[0].avatarURL.name} alt="avatar" />
            </div>
            <div className="question-container">
              <h5>Would you rather</h5>
              <p>{question.optionOne.text}</p>
              <Button
                onClick={redirectToPoll}
                variant="outline-info"
                className="view-poll-button btn-block"
              >
                {answered ? "View Poll" : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default withRouter(Question);
