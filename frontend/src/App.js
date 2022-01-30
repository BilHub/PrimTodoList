import React, { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { Cntainer, Row, Col, Card, Container } from "react-bootstrap";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const getTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/primtodo/",
        config
      );
      const { data } = response;
      setTasks(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async (newTask) => {
    try {
      await axios.post("http://localhost:8000/primtodo/", newTask);
      getTasks();
    } catch (err) {}
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/primtodo/${id}`);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content">
      <Container>
        <Row className="pt-3">
          <Col>
            <AddTask addTask={addTask} />
            {tasks.map((task, index) => {
              return (
                <TasksList
                  key={index}
                  id={task.id}
                  task={task.task}
                  deleteTask={deleteTask}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
