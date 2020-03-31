import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateQuestion = () => {
  return (
    <Card className="createQuestion">
      <Card.Header>
        <h3>Add a New Question</h3>
      </Card.Header>
      <Card.Body>
        <Form className="submit-form createQuestion-form">
        <h6>Complete the question</h6>
        <h5>Would you rather...</h5>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Question One Here" />
          </Form.Group>
            <hr></hr>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Enter Two One Here" />
          </Form.Group>
          <Button type="submit" block variant="primary">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreateQuestion;
