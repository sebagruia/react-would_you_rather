import React from "react";
import { withRouter } from "react-router-dom";

const PollResults = (props) => {
  const { userName, avatarUrl, question } = props.location.state;
  return (
    <div className="user poll">
      <div className="user-name">
        <h5>Asked by {userName}</h5>
      </div>
      <div className="pollresults-container-poll">
        <div className="pollresults-image-container">
          <img src={avatarUrl} alt="avatar" />
        </div>
        <div className="pollresults">
          <h5 className="pollresults-title">Results:</h5>
          <div className="pollresults-container ">
            <div className="pollresults-question"><h6>{`${question.optionOne.text}?`}</h6></div>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
              </div>
              <div className="votes">
                <h6>{`${question.optionOne.votes.length} out of ${question.optionOne.votes.length+question.optionTwo.votes.length} votes`}</h6>
              </div>
            </div>

            <div className="pollresults-container">
              <div className="pollresults-question"><h6>{`${question.optionTwo.text}?`}</h6></div>
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  
                >
                  35%
                </div>
                </div>
              <div className="votes">
                <h6>{`${question.optionTwo.votes.length} out of ${question.optionOne.votes.length+question.optionTwo.votes.length} votes`}</h6>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PollResults);
