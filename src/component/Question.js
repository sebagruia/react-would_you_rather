import React from "react";
import Button from "react-bootstrap/Button";

const Question = (props) => {
  const{userName,avatarUrl,question}=props
  return (
    <div className="user">
      <div className="user-name">
        <h5>{userName} asks:</h5>
      </div>

      <div className="user-info-container">
        <div className="image-container align-middle">
          <img
            src={avatarUrl}
            alt="avatar"
          />
        </div>
        <div className="question-container">
          <h5>Would you rather</h5>
          <p>{question.optionOne.text}</p>
          <Button variant="outline-info" className="view-poll-button btn-block">
            View Poll
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
