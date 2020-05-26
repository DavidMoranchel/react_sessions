import React, { Component } from "react";

// External Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Menu from "./pages/Menu";
import CurrencyConverter from './pages/CurrencyConverter'
import Hooks from './pages/Hooks'
import LogIn from './pages/LogIn'

// CSS
import "./App.css";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isUserLogedIn: false
    }
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    const authToken = localStorage.getItem('authTokenUser')
    if (authToken) {
      this.setState({
        isUserLogedIn: true
      })
    }
  }

  logOut() {
    localStorage.removeItem('authTokenUser')
    this.setState({
      isUserLogedIn: false
    })
  }

  render() {
    const { isUserLogedIn } = this.state
    return (
      <Router>
        <div className="App">
          <Menu logOut={this.logOut} isUserLogedIn={isUserLogedIn} />
          <Switch>
            <Route exact path="/">
              <Home isUserLogedIn={isUserLogedIn} />
            </Route>
            <Route exact path="/notes">
              <Notes isUserLogedIn={isUserLogedIn} />
            </Route>
            <Route exact path="/currency-converter">
              <CurrencyConverter />
            </Route>
            <Route exact path="/hooks">
              <Hooks />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
