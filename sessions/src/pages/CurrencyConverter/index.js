import React, { Component } from "react";

// Components
import Header from "../../components/Header";

// Css
import "./CurrencyConverter.css";

export default class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyMXN: 0,
      currencyUSD: 0,
      currencyEUR: 0,
    };
    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput({ target: { name, value } }) {
    console.log(name, value);
    let _currencyMXN = 0;
    let _currencyUSD = 0;
    let _currencyEUR = 0;
    if (name === "currencyMXN") {
      _currencyMXN = value
      _currencyUSD = value / 23.24
      _currencyEUR = value / 25.49
    } else if (name === "currencyUSD") {
      _currencyMXN = value * 23.24
      _currencyUSD = value
      _currencyEUR = value * 0.91
    } else {
      _currencyMXN = value * 25.49
      _currencyUSD = value / 1.10
      _currencyEUR = value
    }

    this.setState({
      currencyMXN: _currencyMXN,
      currencyUSD: _currencyUSD,
      currencyEUR: _currencyEUR
    })
  }

  render() {
    const { currencyMXN, currencyUSD, currencyEUR } = this.state;
    return (
      <div className="Container">
        <div>
          <Header
            title={"Currency converter"}
            description={"Conversor de divisas MXN-USD-EUR"}
          />
          <div>
            <form>
              <input
                type='number'
                placeholder={"MXN"}
                value={currencyMXN}
                onChange={this.handlerInput}
                name={"currencyMXN"}
              />
              <input
                type='number'
                placeholder={"USD"}
                value={currencyUSD}
                onChange={this.handlerInput}
                name={"currencyUSD"}
              />
              <input
                type='number'
                placeholder={"EUR"}
                value={currencyEUR}
                onChange={this.handlerInput}
                name={"currencyEUR"}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
