import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const API_URL = "http://jsonplaceholder.typicode.com";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>React Axios Example</h1>
        {this.state.users.map(user => (
          <div>
            <h5>{user.name}</h5>
            <h6>{user.email}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
