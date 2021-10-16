import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const PublicCard = ({ el }) => {
  const publics = useSelector((state) => state.publics);

  return (
    <div>
      <Card style={{ width: "15rem" }} className="m-2">
        <Card.Body>
          <Card.Title> API: {el.API} </Card.Title>
          <Card.Text>Description: {el.Description}</Card.Text>
          <Card.Text> Link: {el.Link} </Card.Text>
          <Card.Text> Category:{el.Category} </Card.Text>
          <Button variant="primary">INFO </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PublicCard;
