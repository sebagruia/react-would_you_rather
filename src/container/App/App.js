import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import LoadingBar from "react-redux-loading-bar";
import { connect } from "react-redux";
import { receiveUsersAction } from "../../redux/actions/users/receiveUsersAction";
import { receiveAllQuestionsAction } from "../../redux/actions/questions/receiveAllQuestionsAction";

import LogIn from "../../component/LogIn";
import Navigation from "../../component/Navigation";
import Leaderbord from "../../component/Leaderboard";
import Poll from "../../component/Poll";
import PollResults from "../../component/PollResults";
import CreateQuestion from "../../component/CreateQuestion";
import CategorizedQuestions from "../../component/CategorizedQuestions";
import NoMatch404 from "../../component/NoMatch404";

import {getLoggedUserId, getLoggedUserAvatarUrl} from "../../utils/utils";




class App extends Component {
  componentDidMount() {
    this.props.retreiveUsers();
    this.props.retreiveQuestions();
  }

  render() {
    const { users, logIn, userName, avatarUrl, userId } = this.props;

    return (
      <div>
        <LoadingBar />
        {/* If the user is not Loged In The App is redirected to "LogIn" page */}
        {!logIn ? <Redirect to="/login" /> : null}
        <Route exact path="/login">
          <LogIn users={users} />
        </Route>
        {/* If the user is Loged In The App is redirected to "questions" page*/}
        {logIn ? (
          <Fragment>
            <Route path="/">
              <Navigation userName={userName} avatarUrl={avatarUrl} />
            </Route>

            <Redirect to="/questions" />
            <Switch>
              <Route path="/questions">
                <Redirect to="/questions/unanswered-questions" />
                <CategorizedQuestions />
              </Route>
              <Route exact path="/leaderbord">
                <Leaderbord users={users} />
              </Route>
              <Route exact path="/add-question">
                <CreateQuestion author={userId} />
              </Route>
              <Route path="/poll/:id">
                <Poll />
              </Route>
              <Route path="/pollresults/:id">
                <PollResults/>
              </Route>
              <Route path="*">
                <NoMatch404 />
              </Route>
            </Switch>
          </Fragment>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const users = Object.values(state.usersReducer.users);
  const userName = state.usersReducer.loginField;

  return {
    users: state.usersReducer.users,
    questions: state.questionsReducer.questions,
    logIn: state.usersReducer.logIn,
    userName: state.usersReducer.loginField,
    avatarUrl: getLoggedUserAvatarUrl(users,userName),
    userId: getLoggedUserId(users,userName),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    retreiveUsers: () => dispatch(receiveUsersAction()),
    retreiveQuestions: () => dispatch(receiveAllQuestionsAction()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
