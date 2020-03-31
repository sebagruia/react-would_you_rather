import React from "react";
import UserStats from "../component/UserStats";

const Leaderbord = props => {
  const { users } = props;
  // The user array is sorted according to the SUM of "answered questions+created questions" in the descending order
  const sortedUSers = users.sort((a,b)=>{
    return (Object.keys(b.answers).length + b.questions.length) -  (Object.keys(a.answers).length + a.questions.length); 
  });
  console.log(sortedUSers)
  return (
    <div className="leaderboard">
      {sortedUSers.map(user => {
        return <UserStats key={user.id} user={user} />
      })}
    </div>
  );
};

export default Leaderbord;
