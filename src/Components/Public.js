import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";

const Public = ({ match }) => {
  const [pub, setPub] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOnePub = async () => {
      try {
        let res = await axios.get(
          `https://api.publicapis.org/entries/${match.params.id}`
        );
        setPub(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOnePub();
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
          <Card.Title> API: {pub.API} </Card.Title>
          <Card.Text>Description: {pub.Description}</Card.Text>
          <Card.Text> Link: {pub.Link} </Card.Text>
          <Card.Text> Category:{pub.Category} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Public;
