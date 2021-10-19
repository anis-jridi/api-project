import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handelDeletePublic } from "../Redux/action";
import EditPublic from "./EditPublic";

const PublicCard = ({ pub }) => {
  const publics = useSelector((state) => state.publics);
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "20rem" }} className="m-2">
        <Card.Body>
          <Card.Title> API: {pub.API} </Card.Title>
          <Card.Text>Description: {pub.Description}</Card.Text>
          <Card.Text> Link: {pub.Link} </Card.Text>
          <Card.Text> Category:{pub.Category} </Card.Text>

          <span>
            <Button
              onclick={() => dispatch(handelDeletePublic(pub.id))}
              variant="outline-success"
            >
              DELETE{" "}
            </Button>{" "}
          </span>
          <div>
            <EditPublic pub={pub} />
          </div>
        </Card.Body>
        <span>
          <Link to={`/public/${pub.id}`}>
            <Button variant="outline-success">INFO </Button>
          </Link>
        </span>
      </Card>
    </div>
  );
};

export default PublicCard;
