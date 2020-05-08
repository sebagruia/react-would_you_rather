import React from "react";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../redux/actions/questions/addQuestionAction";
import { setOptionOne } from "../redux/actions/questions/setOptionOneText.Action";
import { setOptionTwo } from "../redux/actions/questions/setOptionTwoText.Action";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

const CreateQuestion = (props) => {
  const { dispatch, userId, optionOneText, optionTwoText } = props;
  const author = userId;

  const [redirect, setRedirect] = useState(false);

  const getOptionOneText = (text) => {
    dispatch(setOptionOne(text));
  };
  const getOptionTwoText = (text) => {
    dispatch(setOptionTwo(text));
  };

  const redirectForm = () => {
    setRedirect(true);
  };

  // When the "Submit" button is clicked the new created question is added to the "fake" database using the "addQuestion" action
  const onSubmitNewQuestion = (event) => {
    event.preventDefault();
    if (optionOneText !== "" && optionTwoText !== "") {
      dispatch(addQuestion({ optionOneText, optionTwoText, author }));
      redirectForm();
    }
  };

  return (
    <Fragment>
      {redirect ? (
        <Redirect to="/questions" />
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
                  onChange={(event) => getOptionOneText(event.target.value)}
                  type="text"
                  placeholder="Enter Question One Here"
                />
              </Form.Group>
              <hr></hr>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onChange={(event) => getOptionTwoText(event.target.value)}
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
const mapStateToProps = (state) => {
  return {
    optionOneText: state.questionsReducer.optionOneText,
    optionTwoText: state.questionsReducer.optionTwoText,
  };
};

export default connect(mapStateToProps)(CreateQuestion);
