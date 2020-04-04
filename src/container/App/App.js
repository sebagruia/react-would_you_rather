import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import LogIn from "../../component/LogIn";
import Home from "../../component/Home";
import Navigation from "../../component/Navigation";
import Leaderbord from "../../component/Leaderboard";
import Poll from "../../component/Poll";
import CreateQuestion from "../../component/CreateQuestion";
import { connect } from "react-redux";
import { receiveUsersAction } from "../../actions/receiveUsersAction";
import { receiveAllQuestionsAction } from "../../actions/receiveAllQuestionsAction";

const mapStateToProps = (state) => {
  const users = Object.values(state.usersReducer.users);
  const userName = state.chooseLoginReducer.loginField;
  const getAvatarrUrl = () => {
    for (let user of users) {
      if (user.name === userName) {
        return user.avatarURL;
      }
    }
  };
  const getUserId = () => {
    for (let user of users) {
      if (user.name === userName) {
        return user.id;
      }
    }
  };

  return {
    users: state.usersReducer.users,
    questions: state.questionsReducer.questions,
    logIn: state.logReducer.logIn,
    userName: state.chooseLoginReducer.loginField,
    avatarUrl: getAvatarrUrl(),
    userId: getUserId(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retreiveUsers: () => dispatch(receiveUsersAction()),
    retreiveQuestions: () => dispatch(receiveAllQuestionsAction()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.retreiveUsers();
    this.props.retreiveQuestions();
  }

  render() {
    const { users, logIn, userName, questions, avatarUrl, userId } = this.props;
    return (
      <div>
        <Route exact path="/">
          {!logIn ? <Redirect to="/login" /> : null}
        </Route>
        <Route exact path="/login" component={LogIn} />

        {logIn ? (
          <Fragment>
            <Redirect to="/" />
            <Route path="/">
              <Navigation userName={userName} avatarUrl={avatarUrl} />
            </Route>
            <Route path="/">
              <Redirect to="/home/questions/unanswered-questions" />
            </Route>
            <Route path="/home">
              <Home users={users} userName={userName} questions={questions} />
            </Route>
            <Route exact path="/leaderbord">
              <Leaderbord users={users} />
            </Route>
            <Route exact path="/add-question">
              <CreateQuestion userId={userId} />
            </Route>
            <Route exact path="/questions/:question_id">
              <Poll />
            </Route>
          </Fragment>
        ) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
