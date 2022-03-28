import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard(user) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
        <Link to={`/users/Detail/${user.id}`}>
          <Button>Details</Button>{" "}
        </Link>
      </Card>
    </div>
  );
}

export default UserCard;
