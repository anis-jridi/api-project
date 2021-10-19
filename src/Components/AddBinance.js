import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handelAddBinance } from "../Redux/action";

const AddBinance = () => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState("");
  const [last, setLast] = useState("");
  const [open, setOpen] = useState("");
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handelSubmit = (e) => {
    e.preventDefault();
    let newBinance = {
      id: Math.random,
      symbol: symbol,
      price: price,
      last: last,
      open: open,
      high: high,
      low: low,
    };
    dispatch(handelAddBinance(newBinance));
    handleClose();
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
            <p>Symbol</p>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
            <p>Price Change</p>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p>Last Price </p>
            <input
              type="text"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
            <p>Open Price </p>
            <input
              type="text"
              value={open}
              onChange={(e) => setOpen(e.target.value)}
            />
            <p>High Price </p>
            <input
              type="text"
              value={high}
              onChange={(e) => setHigh(e.target.value)}
            />
            <p>Low Price </p>
            <input
              type="text"
              value={low}
              onChange={(e) => setLow(e.target.value)}
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

export default AddBinance;
