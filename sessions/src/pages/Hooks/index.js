import React, { useState, useEffect } from "react";

// Components
import Header from "../../components/Header";

// Css
import "./Hooks.css";

function Hooks() {
  const [count, setCount] = useState(0);
  const [isMenuActive, setMenuActive] = useState(false);
  const [titleInput, setTitleInput] = useState("");

  useEffect(() => {
    console.log('La primera vez y ya')
  }, [])

  useEffect(() => {
    setCount(count + 1)
  }, [isMenuActive])

  useEffect(() => {
    console.log('Cambio el input weeee!')
  }, [titleInput])

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://reactsessions-ac545.firebaseio.com/notes.json")
      .then((response) => response.json())
      .then((notes) => {
        var notesArray = [];
        for (let key in notes) {
          notesArray.push({
            key,
            title: notes[key]["title"],
            content: notes[key]["content"],
          });
        }
        setNotes(notesArray);
      });
  }, []);

  return (
    <div className="Container">
      <div>
        <Header
          title={"React hooks"}
          description={"Functional components con estado"}
        />
        <p>
          Me clickeaste {count} ve{count === 1 ? "z" : "ces"}
        </p>
        <button onClick={() => setCount(count + 1)}>Clickeame</button>
        <p>{isMenuActive ? "Menu activo" : "Menu inactivo"}</p>
        <button onClick={() => setMenuActive(!isMenuActive)}>Menu</button>

        <input
          type="text"
          value={titleInput}
          onChange={({ target: { value } }) => setTitleInput(value)}
          placeholder={"Title"}
        />
        <ul>
          {notes.map(({title}, index) => {
            return <li key={`key${index}`}>{title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Hooks;