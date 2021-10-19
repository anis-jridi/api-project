import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handelEditPublic } from "../Redux/action";

const EditPublic = ({ pub }) => {
  const dispatch = useDispatch();
  const [api, setApi] = useState(pub.API);
  const [description, setDescription] = useState(pub.Description);
  const [link, setLink] = useState(pub.Link);
  const [category, setCategory] = useState(pub.Category);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handelSubmit = (e) => {
    e.preventDefault();
    let editedBinance = {
      id: pub.id,
      API: api,
      Description: description,
      Link: link,
      Category: category,
    };
    dispatch(handelEditPublic(editedBinance));
    handleClose();
  };

  return (
    <div>
      <>
        <Button variant="outline-success" onClick={handleShow}>
          Edit
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

export default EditPublic;
