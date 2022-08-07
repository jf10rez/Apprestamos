import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getUnit, startNewUnit } from "../store/slices/units/unitThunks";
import { TableUnits } from "../components/TableUnits";

export const Units = () => {
  const [amount, setAmountLocal] = useState(null);
//   const [isTableShow, setisTableShow] = useState(false);
    const [unitsCount, setUnitsCount] = useState(null)
  const dispatch = useDispatch();
  const { units, load } = useSelector( state => state.units )

  const handleClickNew = () => {
    if (!amount) return Swal.fire("Error", "Debe ingresar unidades", "error");
    if (amount <= 0)
      return Swal.fire(
        "Error",
        "No puedes ingresar valores negativos",
        "error"
      );
    dispatch(startNewUnit({ amount }));
  };

  useEffect(() => {
    if( !load ){
        dispatch( getUnit() )
    }
  }, [])
  

  const countUnits = () => {

    if( units.length > 0 ){
        let counter = 0
        units.map( unit => {
            counter += +unit.amount
        } )
        setUnitsCount(counter)
    }
  }

  return (
    <>
      <motion.div
        className="dashboard"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ ease: "easeOut", delay: 0.5 }}
      >
        {
            unitsCount && (
                <h1>Tienes { unitsCount } unidades disponibles</h1>
            )
        }

        <h1>¿Cuántas unidades quieres ingresar?</h1>

        <div className="container-prest">
          <input
            className="form-control"
            placeholder="Unidades"
            onChange={(e) => setAmountLocal(e.target.value)}
          />
          <button
            className="btn btn-success btn-units"
            onClick={handleClickNew}
          >
            Nuevo
          </button>
          <button
            className="btn btn-success btn-units"
            // onClick={() => setisTableShow(!isTableShow)}
            onClick={countUnits}
          >
            {/* {isTableShow ? "Ocultar" : "Ver todo"} */}
            Ver todo
          </button>
        </div>
      </motion.div>
      {/* {isTableShow && <TableUnits />} */}
    </>
  );
};
