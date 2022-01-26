//stylling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//react
import React, { useState } from "react";

//components
import TasksList from "./components/TasksList";
import Modal from "./components/modals/TaskModal";

//bootstrap components
import { Button } from "react-bootstrap";

function App() {
  //modal state
  const [isOpen, setIsOpen] = useState(false);

  //close and open the modal functions
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal isOpen={isOpen} handleClose={handleClose} />
      <TasksList />
    </>
  );
}

export default App;
