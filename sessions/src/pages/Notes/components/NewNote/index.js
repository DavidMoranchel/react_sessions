import React, { Component } from "react";

// CSS
import "./NewNote.css";

export default class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  addNote(event) {
    event.preventDefault();
    const { title, content } = this.state;
    const note = {
      title,
      content,
    };
    this.props.handlerNewNote(note);
    this.setState({
      title: "",
      content: ""
    })
  }

  render() {
    return (
      <div className="Container">
        <form onSubmit={this.addNote}>
          <div className="Notes-form-content">
            <div className="Notes-inputs-content">
              <input
                value={this.state.title}
                onChange={this.handleInput}
                placeholder={"Titulo de la nota"}
                name={"title"}
              />
              <input
                value={this.state.content}
                onChange={this.handleInput}
                placeholder={"Contenido de la nota"}
                name={"content"}
              />
            </div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}




  // componentDidMount() {

    
  //   fetch(
  //     `https://reactsessions-ac545.firebaseio.com/notes.json`,
  //   )
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

    // fetch(
    //   `https://reactsessions-ac545.firebaseio.com/notes.json`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title:'perro'
    //     }),
    //     headers: {
    //       'Content-type': 'application/json'
    //     }
    //   }
    // )
    // .then((res) => res.json())
    // .then((data) => console.log([...data]))
  // }