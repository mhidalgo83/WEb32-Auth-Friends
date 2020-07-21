import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

const FriendsList = ({ friends }) => {
  //   const [friends, setFriends] = useState([]);

  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get("/api/friends")
  //       .then((res) => {
  //         setFriends(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
