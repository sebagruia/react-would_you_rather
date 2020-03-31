import React from "react";

const UserStats = ({user}) => {
    const numberOfQuestionsAnswered = Object.keys(user.answers).length;
    const numberOfQuestionsCreated = Object.keys(user.questions).length;
    const score = numberOfQuestionsAnswered + numberOfQuestionsCreated;
    
  return (
    <div className="userStats-container">
      <div className="userStats-avatar">
        <img src={user.avatarURL} alt="avatar" />
      </div>
      <div className="userStats-statistic">
        <div className="userStats-statistic-text">
          <h5>{user.name}</h5>
          <div className="answered-questions">
            <div>
              <h6>Answered questions</h6>
            </div>
            <div>
              <h6>{numberOfQuestionsAnswered}</h6>
            </div>
          </div>
          <div className="created-questions">
            <div>
              <h6>Created questions</h6>
            </div>
            <div>
              <h6>{numberOfQuestionsCreated}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="userStats-score">
        <div className="userStats-score-text">
          <h6>Score</h6>
        </div>
        <div className="userStats-score-number">
          <p>{score}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
