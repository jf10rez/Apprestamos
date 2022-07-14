import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <motion.div className="dashboard"
      initial={{opacity: 0, x: 100}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -100}}
      transition={{duration: 0.5}}
    >
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
    </motion.div>
  );
};
