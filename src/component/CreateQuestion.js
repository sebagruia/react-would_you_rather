import React from "react";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../actions/addQuestionAction";
import { addQuestionToUSer } from "../actions/addQuestionToUserAction";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

const CreateQuestion = props => {
  const { dispatch, userId } = props;
  const author = userId;

  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const [redirect, setRedirect] = useState(false);

  const getOptionOneText = text => {
    setOptionOneText(text);
  };
  const getOptionTwoText = text => {
    setOptionTwoText(text);
  };

  const redirectForm = () => {
    setRedirect(true);
  };

  const onSubmitNewQuestion = event => {
    event.preventDefault();
    if (optionOneText !== "" && optionTwoText !== "") {
      dispatch(addQuestion({ optionOneText, optionTwoText, author }));
      dispatch(addQuestionToUSer({ optionOneText, optionTwoText, author }));
      redirectForm();
    }
  };

  return (
    <Fragment>
      {redirect ? (
        <Redirect to="/home" />
      ) : (
        <Card className="createQuestion">
          <Card.Header>
            <h3>Add a New Question</h3>
          </Card.Header>
          <Card.Body>
            <Form
              onSubmit={onSubmitNewQuestion}
              className="submit-form createQuestion-form"
            >
              <h6>Complete the question</h6>
              <h5>Would you rather...</h5>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  onChange={event => getOptionOneText(event.target.value)}
                  type="text"
                  placeholder="Enter Question One Here"
                />
              </Form.Group>
              <hr></hr>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onChange={event => getOptionTwoText(event.target.value)}
                  type="text"
                  placeholder="Enter Question Two One Here"
                />
              </Form.Group>
              <Button type="submit" block variant="primary">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Fragment>
  );
};

export default connect()(CreateQuestion);
