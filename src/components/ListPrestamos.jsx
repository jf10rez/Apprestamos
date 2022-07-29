import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CardDetailPrestamo } from "./CardDetailPrestamo";

export const ListPrestamos = () => {
  const { prestamos } = useSelector((state) => state.prestamos);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <motion.div
      initial={{ width: "0vw", x: "100" }}
      animate={{ width: "51vw", x: 0 }}
      transition={{ duration: 1, origin: 1 }}
    >
      <h1 className="title-list">Lista de prestamos</h1>

      <input
        className="form-control input-list-search"
        placeholder="Buscar..."
      />
      {prestamos && (
        <section id="table-section">
          <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Nombre</th>
                  <th>Monto</th>
                  <th>Cuotas</th>
                  <th>Change %</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {prestamos.map((prestamo) => (
                  <tr key={prestamo.id}>
                    <td>{prestamo.document}</td>
                    <td>{prestamo.name} </td>
                    <td>{prestamo.amount}</td>
                    <td>{prestamo.quota}</td>
                    <td>
                      <motion.button
                        layoutId={prestamo.id}
                        className="btn btn-success"
                        onClick={() => setSelectedId(prestamo.id)}
                      >
                        <i className="bi bi-arrows-angle-expand"></i>
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <AnimatePresence>
              {selectedId && (
                <motion.div className="papa" layoutId={selectedId}>
                  <CardDetailPrestamo setSelectedId={setSelectedId} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      )}
    </motion.div>
  );
};
