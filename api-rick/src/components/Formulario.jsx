import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = ({ setCharacterName }) => {
  const [inputs, handleChange, reset] = useFormulario({
    name: "",
  });

  const { name } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    if (!name.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Complete the name input, please",
        icon: "error",
      });
    }

    setCharacterName(name.trim().toLowerCase());
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ingrese Personaje"
        className="form-control mb-2"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-dark">
        Search
      </button>
    </form>
  );
};

export default Formulario;
