import React, { Component } from "react";
import Counter from "./Counter";

class MountingComp extends Component {
  constructor() {
    super();
    console.log("constructor executed");
  }

  state = {
    users: [],
  };

  static getDerivedStateFromProps(props, state) {
    console.log("Static getDerivedStateFromProps executed");
    return null;
  }

  componentDidMount() {
    this.getUsersData();
  }

  getUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    this.setState({ users: data });
  };

  render() {
    return (
      <div>
        <h2>MountingComp</h2>
        {this.state.users && this.state.users.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>userName</td>
                <td>email</td>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>no data Found</p>
        )}
      </div>
    );
  }
}

export default MountingComp;
