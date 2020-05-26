import React from "react";

// Components
import Header from "../../components/Header";

// Css
import "./Home.css";

function Home(props) {
  console.table(props)
  return (
    <div className="Container">
      <div>
        <Header
          title={"Kodemia modulo 3"}
          description={"Aqui aprenderemos React JS"}
        />
        <p>
          {!props.isUserLogedIn
            ? "No puedes ver el contenido de esta página, inicia sesión"
            : null}
        </p>
      </div>
    </div>
  );
}

export default Home;
