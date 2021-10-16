import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="d-grid gap-2">
        <Link to="/binance">
          <Button variant="primary" size="lg">
            DEVISE
          </Button>
        </Link>
        <Link to="/public">
          <Button variant="secondary" size="lg">
            Publics
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
