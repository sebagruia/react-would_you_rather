import React, { Component, Fragment } from "react";
import logo from "../utils/images/logo.png";
import { connect } from "react-redux";
import { setLoginUserAction } from "../actions/setLoginUserAction";
import { logAction } from "../actions/logAction";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    loginField: state.chooseLoginReducer.loginField,
    logIn: state.logReducer.logIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // The user is selected using the "setLoginUserAction" action
    onLoginChange: (event) => {
      event.preventDefault();
      if (event.target.value !== "Select User" && event.target.value !== "") {
        dispatch(setLoginUserAction(event.target.value));
      }
    },
    //On submiting the form the "loginField" value is set to "True"
    onSubmitUser: (event) => {
      event.preventDefault();
      dispatch(logAction(true));
    },
  };
};

class LogIn extends Component {
  render() {
    const { users, onLoginChange, onSubmitUser, loginField } = this.props;

    return (
      <Fragment>
        <Card className="logIn-form m-auto">
          <Card.Title className="card-title">
            <h5>Welcome to the Would You Rather App!</h5>
            <h6>Please log in to continue</h6>
          </Card.Title>
          <Card.Body>
            <Card.Img className="logo-img-container" variant="top" src={logo} />
            <Form
              className="submit-form"
              onSubmit={
                loginField !== "Select User" && loginField !== ""
                  ? onSubmitUser
                  : null
              }
            >
              <Form.Control
                className="select-user"
                onChange={onLoginChange}
                as="select"
              >
                <option defaultValue>Select User</option>
                {Object.values(users).map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </Form.Control>
              <Button type="submit" block variant="primary">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
