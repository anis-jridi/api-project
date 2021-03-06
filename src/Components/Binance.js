import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const Binance = ({ match }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOneUser = async () => {
      try {
        let res = await axios.get(
          `https://api2.binance.com/api/v3/ticker/24hr/${match.params.id}`
        );
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOneUser();
  }, [match.params.id]);

  if (loading === true) {
    return (
      <>
        <Spinner className="spinner" />
        <span className="visually-hidden">Loading...</span>
        <Button variant="outline-success" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
    );
  }

  return (
    <div>
      <Card style={{ width: "15rem" }} className="m-2">
        <Card.Body>
          <Card.Title> Symbol: {user.symbol} </Card.Title>
          <Card.Text>Price Change: {user.priceChange}</Card.Text>
          <Card.Text> Last Price: {user.lastPrice} </Card.Text>
          <Card.Text> Open Price: {user.openPrice} </Card.Text>
          <Card.Text>
            {" "}
            <BsFillArrowUpCircleFill style={{ color: "green" }} /> High Price:{" "}
            {user.highPrice}{" "}
          </Card.Text>
          <Card.Text>
            {" "}
            <BsFillArrowDownCircleFill style={{ color: "red" }} />
            Low Price: {user.lowPrice}{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Binance;
