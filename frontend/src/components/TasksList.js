import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const TasksList = ({ id, task, deleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleDeleteTask = (e) => {
    e.preventDefault();
    deleteTask(id);
  };
  const handleIsCompleted = (e) => {
    e.preventDefault();
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      <Row className="mt-1">
        <Col>
          <h5 style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
            {task}
          </h5>
        </Col>
        <Col>
          <Form>
            <Button
              variant="success"
              className="mx-2"
              onClick={handleIsCompleted}
            >
              Completed
            </Button>
            <Button variant="danger" onClick={handleDeleteTask}>
              Delete
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default TasksList;
