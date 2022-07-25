import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { startLogin } from "../store/slices/auth/authThunks";

export const Login = () => {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const { email, password } = data
    if( email && password ){
      dispatch( startLogin( email, password ) )
    }
  }

  //TODO: Crear mensajes de error en los inputs

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
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
            <h1 className="login">Iniciar sesión</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline mb-4">
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

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "Complete la contraseña",
                      maxLength: {
                        value: 30,
                        message: "No puede contener mas de 30 caracteres",
                      },
                    })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success btn-block mb-4"
                >
                  Iniciar sesión
                </button>
                

                <div className="row mb-4">

                  <div className="col">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
