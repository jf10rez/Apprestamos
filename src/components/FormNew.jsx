import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { newPrestamo } from "../store/slices/prestamos/prestamoThunks";
import dayjs from "dayjs";

export const FormNew = () => {
  const { amount } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //TODO: Agregar mensajes en los inputs de validaciones
    data.startDate = dayjs(startDate).format('YYYY/MM/DD') ;
    dispatch( newPrestamo( data ) )
  };
  const [startDate, setStartDate] = useState(null);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <input
            type="number"
            className="form-control"
            defaultValue={amount ?? null}
            placeholder="Monto"
            {...register("amount", { required: true, max: 20000000 })}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <input
            type="number"
            className="form-control"
            placeholder="Documento"
            {...register("document", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre completo"
            {...register("name", { required: true })}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <input
            type="number"
            className="form-control"
            placeholder="Cuotas"
            {...register("quota", { required: true })}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <input
            type="number"
            className="form-control"
            placeholder="%"
            {...register("percentage", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Fecha de prestamo"
            className="form-control"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <button className="btn btn-success btn-save" type="submit">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
};
