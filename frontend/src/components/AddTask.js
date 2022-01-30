import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    addTask({ task, isCompleted: false });
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="task">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your task's title"
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>

      <Button
        className="mb-3"
        variant="primary"
        type="submit"
        onClick={handleAddTask}
      >
        Add task
      </Button>
    </Form>
  );
};
export default AddTask;
