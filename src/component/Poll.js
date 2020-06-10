import React, { useState, Fragment } from "react";
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { saveAnswerAction } from "../redux/actions/questions/saveAnswerAction";
import {getLoggedUserId} from "../utils/utils";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";



const Poll = (props) => {
  const [inputValue, setInputValue] = useState("");

  const { dispatch, users, loggedUserName, questions  } = props;
  const authedUser = getLoggedUserId(users, loggedUserName);
  
  const questionId = props.match.params.question_id;
  const question = Object.values(questions).filter(question=>question.id === questionId);

// In case of entering a wrong URL to question this is returned:
  if(question.length === 0){
    return  (<div className="error-page">
              <h3>No Such Question</h3>
              <h6>Please Try going {<NavLink to="/"> HOME</NavLink>}</h6>
            </div>)
  }
 // ==============================================================

  const getQuestionUser = Object.values(users).filter(
    (user) => user.id === question[0].author
  );

  const redirectToPollResults = (event) => {
    event.preventDefault();
    if (inputValue) {
      dispatch(
        saveAnswerAction({ authedUser, qid: questionId, answer: inputValue })
      );
        props.history.push(`/pollresults/${questionId}`)
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Fragment>
      <div className="user poll">
          <div className="user-name">
            <h5>{getQuestionUser[0].name} asks:</h5>
          </div>
          <div className="user-info-container-poll">
            <div className="image-container poll-image-container align-middle">
              <img src={getQuestionUser[0].avatarURL.name} alt="avatar" />
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
                    label={question[0].optionOne.text}
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
                    label={question[0].optionTwo.text}
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
  </Fragment>
  );
};

const mapStateToProps = (state)=>({
  users:state.usersReducer.users,
  loggedUserName:state.usersReducer.loginField,
  questions: state.questionsReducer.questions,
})

export default withRouter(connect(mapStateToProps)(Poll)); //withRouter component from react-router-dom lets you acces the props passed via the Redirect component
