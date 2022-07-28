import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setAmount } from "../store/slices/ui/uiSlice";
import { useState } from "react";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmountLocal] = useState(null);

  const handleClickNew = () => {
    navigate("/new");
    dispatch(setAmount( amount ));
  };

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ ease: "easeOut", delay: 0.5 }}
    >
      <h1>¿De cúanto es tu nuevo prestamo?</h1>

      <div className="container-prest">
        <input
          className="form-control"
          placeholder="Monto de prestamo"
          onChange={(e) => setAmountLocal(e.target.value)}
        />
        <button
          className="btn btn-success btn-new-prest"
          onClick={handleClickNew}
        >
          Nuevo
        </button>
      </div>
    </motion.div>
  );
};
