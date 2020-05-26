import React, { Component } from "react";

// Components
import Header from "../../components/Header";

// Services
import { LogIn as LogInService } from "../../services";

// CSS
import "./LogIn.css";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      success: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    let response = await LogInService(data);
    let responseJSON = await response.json();
    if (responseJSON.success) {
      localStorage.setItem("authTokenUser", responseJSON.data.token);
      this.setState({
        success: true,
      });
    } else if (!responseJSON.success) {
      this.setState({
        success: false,
      });
    }
  }

  render() {
    const { email, password, success } = this.state;
    if (success) {
      window.location.href = "/";
    }
    return (
      <div className="Container">
        <div>
          <Header
            title={"Inicio de sesión"}
            description={"Inicia sesión para ver mas contenido"}
          />
          <div className={"Container"}>
            <form onSubmit={this.handleSubmit}>
              <input
                type={"email"}
                value={email}
                onChange={this.handleInput}
                name={"email"}
                placeholder={"Email"}
              />
              <input
                type={"password"}
                value={password}
                onChange={this.handleInput}
                name={"password"}
                placeholder={"Password"}
              />
              <button type="submit">LogIn</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
