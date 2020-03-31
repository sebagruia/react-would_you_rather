import React from "react";

const UserStats = () => {
  return (
    <div className="userStats-container">
      <div className="userStats-avatar">
        <img src="../../avatars/sarahedo.png" alt="avatar" />
      </div>
      <div className="userStats-statistic">
        <div className="userStats-statistic-text">
          <h5>John Doe</h5>
          <div className="answered-questions">
            <div>
              <h6>Answered questions</h6>
            </div>
            <div>
              <h6>3</h6>
            </div>
          </div>
          <div className="created-questions">
            <div>
              <h6>Created questions</h6>
            </div>
            <div>
              <h6>6</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="userStats-score">
        <div className="userStats-score-text">
          <h6>Score</h6>
        </div>
        <div className="userStats-score-number">
          <p>20</p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
