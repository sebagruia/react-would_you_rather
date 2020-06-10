import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {getLoggedUserId} from "../utils/utils";

const PollResults = (props) => {

  const { users,loggedUserName, questions } = props;
  const questionId = props.match.params.question_id;
  const question = Object.values(questions).filter(question=>question.id === questionId);
  const authedUser = getLoggedUserId(users,loggedUserName)

  // In case of entering a wrong URL to pollResults this is returned:
  if(question.length === 0){
    return  (<div className="error-page">
              <h3>No Such Poll Results</h3>
              <h6>Please Try going {<NavLink to="/"> HOME</NavLink>}</h6>
            </div>)
  }
 // ==============================================================

  const getQuestionUser = Object.values(users).filter(
    (user) => user.id === question[0].author
  );

  // I'm geting the question from store with the updated results
  const reRenderedQuestion = Object.values(questions).filter(renderedQuestion => renderedQuestion.id === questionId);
  const questionOptionOneVotes = reRenderedQuestion[0].optionOne.votes.length;
  const questionOptionTwoVotes = reRenderedQuestion[0].optionTwo.votes.length;

  const answer = users[authedUser].answers[questionId];
  
  // Calculation of votes for optionOne and optionTwo in percentages
  const percentageOptionOne = Math.round((questionOptionOneVotes / (questionOptionOneVotes + questionOptionTwoVotes)) * 100);
  const percentageOptionTwo = Math.round((questionOptionTwoVotes / (questionOptionOneVotes + questionOptionTwoVotes)) * 100);


  const handleOnClick = () => {
    props.history.push("/");
  };

  return (
    <Fragment>
          <div className="user poll">
            <div className="user-name">
              <h5>Asked by {getQuestionUser[0].name}</h5>
            </div>
            <div className="pollresults-container-poll">
              <div className="pollresults-image-container">
                <img src={getQuestionUser[0].avatarURL.name} alt="avatar" />
              </div>
              <div className="pollresults">
                <h5 className="pollresults-title">Results:</h5>
                <div className={`pollresults-container ${answer === 'optionOne' ? 'select' : null}`}>
                  <div className="pollresults-question">
                    <h6>{`${question[0].optionOne.text}?`}</h6>
                    <h6 className={`voted-container ${answer === 'optionOne' ? "" : "hidden"}`}><span className="badge badge-warning voted">Voted</span></h6>
                  </div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${percentageOptionOne}%`
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {isNaN(percentageOptionOne) ? "0" : percentageOptionOne}%
                </div>
                  </div>
                  <div className="votes">
                    <h6>{`${questionOptionOneVotes} out of ${questionOptionOneVotes + questionOptionTwoVotes} votes`}</h6>
                  </div>
                </div>

                <div className={`pollresults-container ${answer === 'optionTwo' ? 'select' : null}`}>
                  <div className="pollresults-question">
                    <h6>{`${question[0].optionTwo.text}?`}</h6>
                    <h6 className={`voted-container ${answer === 'optionTwo' ? "" : "hidden"}`}><span className="badge badge-warning voted">Voted</span></h6>
                  </div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentageOptionTwo}%` }}
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {isNaN(percentageOptionTwo) ? "0" : percentageOptionTwo}%
                </div>
                  </div>
                  <div className="votes">
                    <h6>{`${questionOptionTwoVotes} out of ${questionOptionOneVotes + questionOptionTwoVotes} votes`}</h6>
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="outline-info"
                  className="view-poll-button btn-block"
                  onClick={handleOnClick}
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  loggedUserName:state.usersReducer.loginField,
  questions: state.questionsReducer.questions
})

export default withRouter(connect(mapStateToProps)(PollResults));
