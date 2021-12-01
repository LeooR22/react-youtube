import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext as Juanito } from "../context/UserProvider";

const Navbar = () => {
  const { user } = useContext(Juanito);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">{user ? "Juanito" : "Sin conexion"}</Link>
        <NavLink to="/" className="btn btn-outline-primary">
          Inicio
        </NavLink>
        <NavLink to="/blog" className="btn btn-outline-primary">
          Blog
        </NavLink>
        <NavLink to="/contacto" className="btn btn-outline-primary">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
