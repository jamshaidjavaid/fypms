import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";

import CustomCard from "../../../Components/UI/CustomCard";
import Button from "../../../Components/UI/Button";

import classes from "./PersonalNotes.module.css";

const PersonalNotes = (props) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={classes["main-container"]}>
      <CustomCard>
        <div className={classes.container}>
          <p className={classes.headline}>Your Personal Notes</p>
          <Form onSubmit={handleSubmit} className={classes.form}>
            <Form.Group controlId="todo">
              <Form.Control
                type="text"
                placeholder="Enter a new todo"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
          <ListGroup className="my-3">
            {todos.map((todo, index) => (
              <ListGroup.Item key={index}>
                <div className={classes.item}>
                  <p className={classes.description}>{todo}</p>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </CustomCard>
    </div>
  );
};

export default PersonalNotes;
