import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DataCard } from "./DataCard";
import { handelSetChange } from "../Redux/action";

const DataList = () => {
  const changes = useSelector((state) => state.changes);
  const dispatch = useDispatch();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        let res = await axios.get(
          "https://api2.binance.com/api/v3/ticker/24hr"
        );
        setUser(res.data);
        setLoading(false);
        dispatch(handelSetChange(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  if (loading === true) {
    return (
      <>
        <Spinner className="spinner" />
        <span className="visually-hidden">Loading...</span>
        <Button variant="primary" disabled>
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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "150px",
        marginRight: "100px",
      }}
    >
      {user.map((el, i) => (
        <DataCard el={el} key={i} />
      ))}
    </div>
  );
};

export default DataList;
