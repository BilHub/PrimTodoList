import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const TasksList = ({ id, task }) => {
  return (
    <>
      <Row className="mt-1">
        <Col>
          <h5>{task}</h5>
        </Col>
        <Col>
          <Form>
            <Button variant="success" className="mx-2">
              Completed
            </Button>
            <Button variant="danger">Delete</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default TasksList;
