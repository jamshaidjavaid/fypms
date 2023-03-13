import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";

import CustomCard from "../../../Components/UI/CustomCard";
import Button from "../../../Components/UI/Button";

import classes from "./PersonalNotes.module.css";

const PersonalNotes = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, newNote]);
    setNewNote("");
  };

  const handleDelete = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className={classes["main-container"]}>
      <CustomCard>
        <div className={classes.container}>
          <p className={classes.headline}>Your Personal Notes</p>
          <Form onSubmit={handleSubmit} className={classes.form}>
            <Form.Group controlId="notes">
              <Form.Control
                type="text"
                placeholder="Enter a new note"
                value={newNote}
                onChange={(event) => setNewNote(event.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
          <ListGroup className="my-3">
            {notes.map((note, index) => (
              <ListGroup.Item key={index}>
                <div className={classes.item}>
                  <p className={classes.description}>{note}</p>
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
