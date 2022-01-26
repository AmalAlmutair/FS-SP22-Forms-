//react
import React, { useState } from "react";

//bootstrap components
import { Modal, Button, Form } from "react-bootstrap";

//stores
import taskStore from "../../stores/taskStore";

export default function TaskModal({ isOpen, handleClose }) {
  const [task, setTask] = useState({
    title: "",
    priority: "",
  });
  const handleChange = (event) => {
    /**
     we did this because we didn't want to have a redundant code.
     setTask({ ...task, title: event.target.value });
     setTask({ ...task, priority: event.target.value });
     **********************************************
     We want to have a dynamic update for the object properties 
     So we will do the following. 
     1- We will give each input feild (Form.control, Form.Select,...etc) a name. You can find examples within line (73 - 80)

     2- Make sure the name is the excat same name of the property you want to change in the object: title, priority,...etc)

     3- Let the magic begins. handle change will have the following:
      ** you want to update one property at a time right? then we need to spread the object. why?
          because if we didn't we will lose all the other properties. 
       
          - setTask({...task, }) the spreading part

      ** Now since we want to access the property dynamically we will do the following
        
         - setTask({...task,[event.target.name] }) 
        
         event.target.name represents the property name. whether its a title or priority.
         But why did we add the [] ? 
         since the event.target.name is a string. Then we have to add it! *object rules*
         task[event.target.name] = task.title or task.priority it is the same thing!

      ** Then we will add the following. You now why...

       - setTask({...task,[event.target.name] : event.target.value}) 

       And thats it 😍
     */
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form default behavior
    taskStore.addTask(task);
    setTask({
      title: "",
      priority: "",
    }); // Thank you Hasan!
    handleClose(); // close modal
  };
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your task"
              onChange={handleChange}
              name="title" // example 1
            />
          </Form.Group>

          <Form.Label>priority</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="priority" //example 2
            onChange={handleChange}
          >
            <option>Open this select menu</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </Form.Select>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
