import React, { Component } from "react";

// External Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Menu from "./pages/Menu";
import CurrencyConverter from './pages/CurrencyConverter'

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
              <Home />
            </Route>
            <Route exact path="/notes">
              <Notes isUserLogedIn={isUserLogedIn} />
            </Route>
            <Route exact path="/currency-converter">
              <CurrencyConverter />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}


// componentDidMount() {
//   localStorage.setItem('authTokenUser','3425432531')
//   const authKey = localStorage.getItem('authTokenUser')

  
//   if (authKey) {
//     console.log(authKey)
//   }
// }