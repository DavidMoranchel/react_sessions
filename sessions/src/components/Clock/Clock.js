import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "David",
    };
  }

  componentDidMount() {
    this.dateInterval = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log("date", this.state.date);
  }

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

// Ejercicio

/*
  Crear un nuevo componente <Counter />
  Eeasy - El counter va a iniciar en 0 y quiero que impriman en consola
  cuando el counter pase por un numero multiplo de 8
  Hard - Van a detener el contador cuando llegue a 20
  Additional - El contador puede ir de N en N
*/
