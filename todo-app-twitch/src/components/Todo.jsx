const Todo = ({ todo, deleteTodo, editTodo }) => {
  const { id, name, description, state, priority } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {name} ({state ? "Success" : "Pending"})
        </div>
        <p>{description}</p>
        <div className="btn btn-danger me-2" onClick={() => deleteTodo(id)}>
          Eliminar
        </div>
        <div className="btn btn-warning" onClick={() => editTodo(id)}>
          Editar
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">
        {priority && "Priority"}
      </span>
    </li>
  );
};

export default Todo;
