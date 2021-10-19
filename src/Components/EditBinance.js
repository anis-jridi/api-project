import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handelEditBinance } from "../Redux/action";

const EditBinance = ({ binance }) => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState(binance.symbol);
  const [price, setPrice] = useState(binance.priceChange);
  const [last, setLast] = useState(binance.lastPrice);
  const [open, setOpen] = useState(binance.openPrice);
  const [high, setHigh] = useState(binance.highPrice);
  const [low, setLow] = useState(binance.lowPrice);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let handelSubmit = (e) => {
    e.preventDefault();
    let editedPublic = {
      id: binance.id,
      priceChange: price,
      lastPrice: last,
      openPrice: open,
      highPrice: high,
      lowPrice: low,
    };
    dispatch(handelEditBinance(editedPublic));
    handleClose();
  };

  return (
    <div>
      <>
        <Button variant="outline-success" onClick={handleShow}>
          EDIT
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT BINANCE</Modal.Title>
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

export default EditBinance;
