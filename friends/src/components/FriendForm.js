import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const FriendForm = ({ setFriends }) => {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });
  const { name, age, email } = friend;
  const { push } = useHistory();
  const handleChange = (e) => {
    e.preventDefault();
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", friend)
      .then((res) => {
        setFriends(res.data);
        setFriend({ name: "", age: "", email: "" });
        push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Enter Name"
        ></input>
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={age}
          placeholder="Enter Age"
        ></input>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="Enter Email"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
