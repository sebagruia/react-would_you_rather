import React from "react";
import Button from "react-bootstrap/Button";

const Question = () => {
  return (
    <div className="user">
      <div className="user-name">
        <h5>Sarah Edo asks:</h5>
      </div>

      <div className="user-info-container">
        <div className="image-container align-middle">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Kurt&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=BlazerSweater&clotheColor=PastelBlue&graphicType=Diamond&eyeType=WinkWacky&eyebrowType=SadConcerned&mouthType=Default&skinColor=Light"
            alt="avatar"
          />
        </div>
        <div className="question-container">
          <h5>Would you rather</h5>
          <p>Lorem Ipsom</p>
          <Button variant="outline-info" className="view-poll-button btn-block">
            View Poll
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
