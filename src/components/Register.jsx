import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startRegister } from "../store/slices/auth/authThunks";

export const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, celPhone, pin } = data;
    if (email && password && celPhone && pin) {
      dispatch(startRegister(data));
    }
  };

  return (
    <section className=" text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/075.jpg"
              alt="Trendy Pants and Shoes"
              className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8 container-register">
            <h1 className="login">Crear cuenta</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row row-register">
                <div className="col-md-6 col-sm-12">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    placeholder="Correo electrónico"
                    {...register("email", {
                      required: "Complete el correo",
                      maxLength: {
                        value: 30,
                        message: "No puede contener mas de 30 caracteres",
                      },
                    })}
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <input
                    type="number"
                    id="form2Example1"
                    className="form-control"
                    placeholder="Celular"
                    {...register("celPhone", {
                      required: "Ingrese el celular",
                      maxLength: {
                        value: 30,
                        message: "No puede contener mas de 30 caracteres",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "Complete la contraseña",
                      maxLength: {
                        value: 30,
                        message: "No puede contener mas de 4 caracteres",
                      },
                    })}
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <input
                    type="number"
                    id="form2Example2"
                    className="form-control"
                    placeholder="Pin"
                    {...register("pin", {
                      required: "Complete el pin",
                      maxLength: {
                        value: 4,
                        message: "No puede contener mas de 4 caracteres",
                      },
                      minLength: {
                        value: 4,
                        message: "Minimo 4 caracteres",
                      },
                    })}
                  />
                  {errors.pin && (
                    <p className="message-error">{errors.pin.message}</p>
                  )}
                </div>
              </div>
              <div className="row row-register">
                <div className="col-md-6 col-sm-12">
                  <input
                    type="text"
                    id="form2Example2"
                    className="form-control"
                    placeholder="Nombre completo"
                    {...register("name", {
                      required: "Complete el Nombre",
                      maxLength: {
                        value: 30,
                        message: "No puede contener mas de 4 caracteres",
                      },
                    })}
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <div>
                    <button
                      type="submit"
                      className="btn btn-success btn-block mb-4"
                    >
                      Crear cuenta
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
