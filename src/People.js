import { Component } from "react";
import UserListItem from "./UserListItem";
import "./App.css";
class People extends Component {
  render() {
    return (
      <div className="usersApp">
        <h1>Our Users Around The World!</h1>
        <UserListItem />
      </div>
    );
  }
}

export default People;
