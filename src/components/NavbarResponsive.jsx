import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogout } from "../store/slices/auth/authSlice";

export const NavbarResponsive = () => {
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Jhonatan Florez
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link className="link-navbar" to="/">Inicio</Link>
          <Link className="link-navbar" to="/list">Prestamos</Link>
          <Link className="link-navbar" to="/units">Unidades</Link>
          <FiLogOut className="btn-logout" onClick={ () => dispatch( authLogout() ) } />
        </div>
      </div>
    </nav>
  );
};
