import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class LogIn extends Component {
  render() {
    const {onLoginChange, users, loginField} = this.props;
    return (
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Form>
            <Form.Control onChange={onLoginChange} as="select">
              <option defaultValue>Select User</option>
              <option value="Sarah Edo">Sarah Edo</option>
              <option value="Tyler McGinnis">Tyler McGinnis</option>
              <option value="John Doe">John Doe</option>
            </Form.Control>
            <Button variant="primary">Sign In</Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default LogIn;
