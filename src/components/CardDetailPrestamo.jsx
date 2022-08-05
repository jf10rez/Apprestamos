import { useDispatch, useSelector } from "react-redux";
import { clearActivePrestamo } from "../store/slices/prestamos/prestamoSlice";
import DatePicker from "react-datepicker";
import { addMount } from "../helpers/addMounth";
import { useForm } from "../hooks/useForm";
import { PinComponent } from "./PinComponent";
import { useState } from "react";

export const CardDetailPrestamo = ({ setSelectedId }) => {
  const dispatch = useDispatch();
  const { prestamoSelected } = useSelector((state) => state.prestamos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formValues, handleInputChange] = useForm({
    amount: prestamoSelected?.amount,
    startDate: new Date(prestamoSelected?.startDate),
  });

  const { amount, startDate } = formValues;

  const handleEdit = (e) => {
    setIsModalOpen(true);
    return;
    e.preventDefault();
    console.log(formValues);
  };

  if (!prestamoSelected) return;
  return (
    <div className="card text-white bg-success mb-3 card-prestamo">
      {isModalOpen && <PinComponent isModalOpen={isModalOpen} />}
      <div className="card-header">
        <span>{prestamoSelected.name}</span>
        <i
          className="bi bi-x-circle"
          onClick={() => {
            setSelectedId(null);
            dispatch(clearActivePrestamo());
          }}
        ></i>
      </div>
      <div className="card-body">
        <div className="row p-2">
          <div className="col-md-6">
            <label htmlFor="amount"> Monto prestamo </label>
            <input
              type="number"
              value={amount}
              className="form-control"
              name="amount"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="remaining"> Prestamo restante </label>
            <input
              type="number"
              disabled={true}
              value={prestamoSelected.remainingAmount}
              className="form-control"
              name="remaining"
            />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-6">
            <label htmlFor="amount"> Fecha inicial prestamo </label>
            <DatePicker
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              value={startDate}
              placeholderText="Fecha de prestamo"
              className="form-control"
              name="startDate"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="next"> Próximo pago </label>
            <DatePicker
              selected={addMount(new Date(prestamoSelected.startDate))}
              disabled={true}
              dateFormat="dd/MM/yyyy"
              placeholderText="Próximo pago"
              className="form-control"
              name="nextPay"
            />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-6">
            <label> Cuotas restantes </label>
            <input
              type="text"
              disabled={true}
              value={`${prestamoSelected.currentQuota} de ${prestamoSelected.quota}`}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label> Porcentaje de prestamo </label>
            <input
              type="text"
              disabled={true}
              value={`${prestamoSelected.percentage}%`}
              className="form-control"
            />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-6">
            <button className="btn btn-primary" onClick={handleEdit}>
              Editar prestamo
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary btn-pay">Pago total</button>
          </div>
        </div>
      </div>
    </div>
  );
};
