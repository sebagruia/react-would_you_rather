import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoginUserAction } from "../actions/setLoginUserAction";
import { logInAction } from "../actions/logInAction";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    loginField: state.chooseLoginReducer.loginField,
    logIn: state.logInReducer.logIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginChange: event => {
      event.preventDefault();
      dispatch(setLoginUserAction(event.target.value));
    },
    onSubmitUser: event => {
      event.preventDefault();
        dispatch(logInAction(true));
     
    }
  };
};

class LogIn extends Component {
  render() {
    const { users, onLoginChange, onSubmitUser,loginField , logIn} = this.props;
  if(logIn){
    return null;
  }
  else{
    return (
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Form onSubmit={onSubmitUser}>
            <Form.Control onChange={loginField!=="Select User" && onLoginChange} as="select">
              <option defaultValue>Select User</option>
              {users.map(user => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </Form.Control>
            <Button type="submit" variant="primary">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
