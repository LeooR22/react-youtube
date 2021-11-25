import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Character from "./Character";
import Loading from "./Loading";

const PintarDatos = ({ characterName }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiConsume(characterName);
    // localStorage.setItem("apiName", JSON.stringify(characterName));
  }, [characterName]);

  const apiConsume = async (name) => {
    setLoading(true);

    try {
      const res =
        await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=alive
            `);

      if (!res.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Character not found",
          icon: "error",
        });
      }

      const data = await res.json();
      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="row mt-3">
      {characters.map((item) => (
        <Character key={item.id} character={item} />
      ))}
    </div>
  );
};

export default PintarDatos;
