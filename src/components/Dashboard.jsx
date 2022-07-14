import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>¿De cúanto es tu nuevo prestamo?</h1>

      <div className="container-prest">
        <input className="form-control" placeholder="Monto de prestamo" />
        <button
          className="btn btn-success btn-new-prest"
          onClick={() => navigate("/new")}
        >
          Nuevo
        </button>
      </div>
    </div>
  );
};
