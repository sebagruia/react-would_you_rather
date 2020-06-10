import React, {Fragment} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Question = (props) => {
  const { users, question, answered } = props;

  const getQuestionUser = Object.values(users).filter(
    (user) => user.id === question.author
  );

  const redirectToPoll = (event) => {
    event.preventDefault();
    if(!answered){
      props.history.push(`/questions/${question.id}`);
    }
    else{
      props.history.push(`/pollresults/${question.id}`);
    }
    
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

const mapStateToProps = (state)=>({
  users:state.usersReducer.users
})



export default withRouter(connect(mapStateToProps)(Question));
