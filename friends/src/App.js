import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
