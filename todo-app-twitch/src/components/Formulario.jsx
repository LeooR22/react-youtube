import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ agregarTodo }) => {
  const initialState = {
    name: "",
    description: "",
    state: "",
    priority: false,
  };

  const [inputs, handleChange, reset] = useFormulario(initialState);

  const { name, description, state, priority } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error!",
        text: "The name field is empty",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    if (!description.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Error!",
        text: "The description field is empty",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Success!",
      text: "TODO added",
      icon: "success",
      confirmButtonText: "OK",
    });
    agregarTodo({
      name: name,
      description: description,
      state: state === "pending" ? false : true,
      priority: priority,
      id: uuidv4(),
    });

    reset();
  };

  return (
    <>
      <h3>Agregar TODO</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Name of TODO"
          value={name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description of TODO"
          className="form-control mb-2"
          value={description}
          onChange={handleChange}
        ></textarea>
        <select
          name="state"
          className="form-control mb-2"
          value={state}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="complete">Complete</option>
        </select>
        <div className="form-check">
          <input
            name="priority"
            className="form-check-input"
            type="checkbox"
            checked={priority}
            onChange={handleChange}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Priority
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
