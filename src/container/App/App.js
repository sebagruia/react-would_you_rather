import React, { Component } from "react";
import "./App.css";
import Navigation from "../../component/Navigation";
import LogIn from "../../component/LogIn";
import Home from "../../component/Home";
import { connect } from "react-redux";
import { receiveUsersAction } from "../../actions/receiveUsersAction";
import { receiveAllQuestionsAction } from "../../actions/receiveAllQuestionsAction";

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    questions: state.questionsReducer.questions,
    logIn: state.logInReducer.logIn,
    userName:state.chooseLoginReducer.loginField
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
    return (
      <div>
        <Navigation logIn = {this.props.logIn} userName = {this.props.userName}/>
        <LogIn />
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
