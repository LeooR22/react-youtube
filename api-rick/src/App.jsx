import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

const App = () => {
  const [characterName, setCharacterName] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("apiName")) {
  //     setCharacterName(JSON.parse(localStorage.getItem("apiName")));
  //   }
  // }, []);

  return (
    <div className="container">
      <h1>App Rick And Morty</h1>
      <Formulario setCharacterName={setCharacterName} />
      <PintarDatos characterName={characterName} />
    </div>
  );
};

export default App;
