import React, {Fragment, useState } from "react";
import {connect} from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {getLoggedUserId} from "../utils/utils";

const Question = (props) => {
  const { users, loggedUserName, question, answered } = props;
  const [redirect, setRedirect] = useState(false);

  const redirectToPoll = (event) => {
    event.preventDefault();
    setRedirect(true);
  };

  const getQuestionUser = Object.values(users).filter(
    (user) => user.id === question.author
  );

  const stateToPass = {
    questionUserName: getQuestionUser[0].name,
    questionUserAvatarUrl: getQuestionUser[0].avatarURL.name,
    authedUser:getLoggedUserId(users, loggedUserName),
    question: question
  };

  return (
    <Fragment>
      {/* If "redirect" variable is "true" and the "answered" prop was not passed from parent then the page is redirected to "Poll" page */}
      {redirect && !answered ? (
        <Redirect
          to={{
            pathname: `/poll/${question.id}`,
            state: stateToPass
          }}
        />
      /* If "redirect" variable is "true" and the "answered" prop was passed from parent then the page is redirected to "PollResults" page */
      ) : redirect && answered ? (
        <Redirect
          to={{
            pathname: `/pollresults/${question.id}`,
            state:stateToPass
          }}
        />
      ) : (
        <div className="user">
          <div className="user-name">
            <h5>{getQuestionUser[0].name} asks:</h5>
          </div>

          <div className="user-info-container">
            <div className="image-container align-middle">
              <img src={getQuestionUser[0].avatarURL.name} alt="avatar" />
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

const mapStateToProps = (state)=>({
  users:state.usersReducer.users,
  loggedUserName:state.usersReducer.loginField
})



export default withRouter(connect(mapStateToProps)(Question));
