import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import CategorizedQuestions from "../component/CategorizedQuestions";

const Home = (props) => {
  const { users, userName, questions } = props;
  const selectUser = Object.values(users).filter(
    (user) => user.name === userName
  );

  return (
    <Fragment>
      {/* <Route exact path="/">
        <Redirect to="/questions/unanswered-questions" />
      </Route> */}
            <CategorizedQuestions
              users={users}
              userName={userName}
              questions={questions}
              selectUser={selectUser}
            />
    </Fragment>
  );
};

export default Home;
