import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [users, setusers] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContetnt: "space-around",
        flexwrap: "wrap",
      }}
    >
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}

export default UserList;
