
export const Dashboard = () => {
  return (
    <div className="dashboard">
        <h1>¿De cúanto es tu nuevo prestamo?</h1>

        <div className="container-prest">
            <input className="form-control" placeholder="Monto de prestamo" />
            <button className="btn btn-primary btn-new-prest"> Nuevo </button>
        </div>
    </div>
  )
}
