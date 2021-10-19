import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handelAddPublic } from "../Redux/action";

const AddPublic = () => {
  const dispatch = useDispatch();
  const [api, setApi] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handelSubmit = (e) => {
    e.preventDefault();
    let newPublic = {
      id: Math.random,
      api: api,
      description: description,
      link: link,
      category: category,
    };
    dispatch(handelAddPublic(newPublic));
  };

  return (
    <div>
      <>
        <Button variant="outline-success" onClick={handleShow}>
          ADD
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>API</p>
            <input
              type="text"
              value={api}
              onChange={(e) => setApi(e.target.value)}
            />
            <p>Description</p>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p>Link</p>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <p>Category</p>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={handelSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddPublic;
