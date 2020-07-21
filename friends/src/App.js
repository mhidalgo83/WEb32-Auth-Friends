import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

import { axiosWithAuth } from "./utils/axiosWithAuth";

function App() {
  const [friends, setFriends] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);
  console.log(friends);
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/friends">Friends</NavLink>
            </li>
            <li>
              <NavLink to="/add-friend">Add a Friend</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <h1>They'll be there for you!!</h1>
      <Switch>
        <PrivateRoute
          exact
          path="/friends"
          component={FriendsList}
          friends={friends}
          setFriends={setFriends}
        />
        {/* <FriendsList friends={friends} /> */}

        <PrivateRoute
          exact
          path="/add-friend"
          component={FriendForm}
          setFriends={setFriends}
        />
        {/* <FriendForm setFriends={setFriends} /> */}

        {/* <Route path="/" component={Login} isLoggedIn={isLoggedIn} /> */}
        <Route path="/">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
