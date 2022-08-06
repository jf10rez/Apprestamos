import { motion } from "framer-motion";
import { useState } from "react";
import { startDeletePrestamo } from "../store/slices/prestamos/prestamoThunks";
import { PinComponent } from "./PinComponent";

export const DeleteButton = ({ prestamo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => setIsModalOpen(true)
  return (
    <>
    {isModalOpen && (
        <PinComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={prestamo}
          action={ startDeletePrestamo }
        />
      )}
      <motion.button className="btn btn-danger ml-3">
        <i className="bi bi-trash-fill" onClick={handleDelete}></i>
      </motion.button>
    </>
  );
};
