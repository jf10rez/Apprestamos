import { FormNew } from "./FormNew";
import { motion } from 'framer-motion'

export const NewPrestamo = () => {
  return (
    <motion.div className="new"
    initial={{ width: "0vw", x: "100" }}
    animate={{ width: "51vw", x: 0 }}
    transition={{ duration: 1, origin: 1 }}
    >
      <h1>Completa los siguientes datos</h1>

      <div className="container">
          <FormNew />
      </div>
    </motion.div>
  );
};
