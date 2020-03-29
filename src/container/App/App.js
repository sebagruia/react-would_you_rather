import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Navigation from "../../component/Navigation";
import LogIn from "../../component/LogIn";
import Home from "../../component/Home";
import { connect } from "react-redux";
import { receiveUsersAction } from "../../actions/receiveUsersAction";
import { receiveAllQuestionsAction } from "../../actions/receiveAllQuestionsAction";

const mapStateToProps = state => {
  const users = state.usersReducer.users;
  const userName = state.chooseLoginReducer.loginField;
  const getAvatarrUrl = () => {
    for (let user of users) {
      if (user.name === userName) {
        return user.avatarURL;
      }
    }
  };
  return {
    users: state.usersReducer.users,
    questions: state.questionsReducer.questions,
    logIn: state.logReducer.logIn,
    userName: state.chooseLoginReducer.loginField,
    avatarUrl: getAvatarrUrl()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retreiveUsers: () => dispatch(receiveUsersAction()),
    retreiveQuestions: () => dispatch(receiveAllQuestionsAction())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.retreiveUsers();
    this.props.retreiveQuestions();
  }

  render() {
    const { users, logIn, userName, avatarUrl, questions } = this.props;
    return (
      <div>
          {/* <Route
          path="/"
          render={() => {
            return <LogIn />;
          }}
        />
        <Route
          path="/home"
          render={() => {
            return (
              <Fragment>
                <Navigation userName={userName} avatarUrl={avatarUrl} />
                <Home users={users} userName={userName} questions={questions} />
              </Fragment>
            );
          }}
        /> */}

      

        {logIn ? (
            <Navigation userName={userName} avatarUrl={avatarUrl} />
          ) : null}

          {!logIn ? (
              <LogIn />
          ) : null}

          {logIn ? (
            <Home users={users} userName={userName} questions={questions} />
          ) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
