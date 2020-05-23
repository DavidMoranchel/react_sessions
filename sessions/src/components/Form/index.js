import React, { Component } from "react";

// Css
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleInputFirstName = this.handleInputFirstName.bind(this);
    this.handleInputLastName = this.handleInputLastName.bind(this);
  }

  handleInputFirstName(event) {
    console.log(event.target.value);
    this.setState({
      firstName: event.target.value,
    });
  }

  handleInputLastName(event) {
    console.log(event.target.value);
    this.setState({
      lastName: event.target.value,
    });
  }

  render() {
    const { firstName, lastName } = this.state
    return (
      <div className="form-container">
        <form>
          <input
            value={firstName}
            onChange={this.handleInputFirstName}
            placeholder={"First name"}
          />
          <input
            value={lastName}
            onChange={this.handleInputLastName}
            placeholder={"Last name"}
          />
        </form>
        <p>Hola {firstName} {lastName}</p>
      </div>
    );
  }
}
