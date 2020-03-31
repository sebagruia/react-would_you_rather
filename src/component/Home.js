import React, { Fragment } from "react";
import {Route,Redirect} from "react-router-dom";
import CategorizedQuestions from "../component/CategorizedQuestions";

const Home = props => {
  const { users, userName, questions } = props;
  const selectUser = users.filter(user => user.name === userName);

  return (
    <Fragment>
      <Route exact path="/home">
        <Redirect to="/home/questions/unanswered-questions"/>
      </Route>
      <Route path="/home"
       render={() => {
        return <CategorizedQuestions
          users={users}
          userName={userName}
          questions={questions}
          selectUser={selectUser}
        />
      }}
      />
    </Fragment>
  );
};

export default Home;
