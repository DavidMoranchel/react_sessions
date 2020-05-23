import React, { Component } from "react";

// External Packages
import { Redirect } from "react-router-dom";

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
    this.handleServiceResponse = this.handleServiceResponse.bind(this)
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleServiceResponse(response) {
    if (response.success) {
      localStorage.setItem('authTokenUser', response.data.token)
      this.setState({
        success: true
      })
    }
    console.log(response.error)
  } 

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    LogInService(data, this.handleServiceResponse)
  }

  render() {
    const { email, password, success } = this.state;
    return (
      <div className="Container">
        {success ? <Redirect to='/' /> : null }
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
