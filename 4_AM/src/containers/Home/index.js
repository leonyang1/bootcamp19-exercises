import React, { Component } from "react";
import Welcome from "../../components/Welcome";
import Form from "../../components/Form";

class Home extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Form />
      </div>
    );
  }
}

export default Home;
