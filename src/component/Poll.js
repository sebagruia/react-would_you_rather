import React, {useState, Fragment} from "react";
import Button from "react-bootstrap/Button";
import { withRouter,Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Poll = (props) => {
  const [redirect, setRedirect] = useState(false);

  const redirectToPollResults = (event) => {
    console.log(event)
    event.preventDefault();
    setRedirect(true);
  };

  //props.location.state represents the props passed via Redirect (react-router-dom) from the Question project component
  const { userName, avatarUrl, question } = props.location.state;
  return (
    <Fragment>
      {
        redirect ? 
        <Redirect
        to={{
          pathname:`/pollresults/${question.id}`,
          state: {
            userName: userName,
            avatarUrl: avatarUrl,
            question: question,
            questionId:question.id
          },
        }}
      />
      :
      <div className="user poll">
      <div className="user-name">
        <h5>{userName} asks:</h5>
      </div>
      <div className="user-info-container-poll">
        <div className="image-container poll-image-container align-middle">
          <img src={avatarUrl} alt="avatar" />
        </div>
        <Form onSubmit={redirectToPollResults} className="question-container">
          <h5>Would you rather...</h5>
          <div className="poll-first-question-container">
            <div className="input-container">
              <Form.Check
                type="radio"
                label={question.optionOne.text}
                name="selection"
                id="first-question-checkbox"
              />
            </div>
          </div>

          <div className="poll-second-question-container">
            <div className="input-container">
              <Form.Check
                type="radio"
                label={question.optionTwo.text}
                name="selection"
                id="second-question-checkbox"
              />
            </div>
          </div>

          <Button type="submit" variant="outline-info" className="view-poll-button btn-block">
            Submit
          </Button>
        </Form>
      </div>
    </div>
      }
 
    </Fragment>
   
  );
};

export default withRouter(Poll); //withRouter component from react-router-dom lets you acces the props passed via the Redirect component
