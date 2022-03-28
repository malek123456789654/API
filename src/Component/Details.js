import axios from "axios";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Details() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users${id}`)
      .then((res) => setUser(res.data))
      .then((res) => setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {loading ? (
        "wait"
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{user.phone}</Card.Title>
            <Card.Text>{user.company}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Details;
