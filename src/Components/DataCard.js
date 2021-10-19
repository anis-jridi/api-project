import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { handelDeleteBinance } from "../Redux/action";
import EditBinance from "./EditBinance";

export const DataCard = ({ binance }) => {
  const changes = useSelector((state) => state.changes);
  const dispatch = useDispatch();
  return (
    <div>
      <Card
        style={{ width: "15rem", backgrounColor: "yellow" }}
        className="m-2"
      >
        <Card.Body style={{ backgrounColor: "yellow" }}>
          <Card.Title> Symbol: {binance.symbol} </Card.Title>
          <Card.Text>Price Change: {binance.priceChange}</Card.Text>
          <Card.Text> Last Price: {binance.lastPrice} </Card.Text>
          <Card.Text> Open Price: {binance.openPrice} </Card.Text>
          <Card.Text>
            {" "}
            <BsFillArrowUpCircleFill style={{ color: "green" }} /> High Price:{" "}
            {binance.highPrice}{" "}
          </Card.Text>
          <Card.Text>
            {" "}
            <BsFillArrowDownCircleFill style={{ color: "red" }} />
            Low Price: {binance.lowPrice}{" "}
          </Card.Text>
          <span>
            <Link to={`/finance/${binance.id}`}>
              <Button variant="outline-success">INFO </Button>{" "}
            </Link>
          </span>
          <div>
            <Button
              onClick={() => dispatch(handelDeleteBinance(binance.id))}
              variant="outline-success"
            >
              DELETE{" "}
            </Button>{" "}
            <EditBinance binance={binance} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DataCard;
