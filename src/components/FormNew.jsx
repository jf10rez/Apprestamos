import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const FormNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const [startDate, setStartDate] = useState(null);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <input
            type="number"
            className="form-control"
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
        <div className="col-md-6 col-sm-12">
          <input
            type="number"
            className="form-control"
            placeholder="Numero de cuotas"
            {...register("quota", { required: true })}
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
