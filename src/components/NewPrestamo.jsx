import { FormNew } from "./FormNew";
import { motion } from 'framer-motion'

export const NewPrestamo = () => {
  return (
    <motion.div className="new"
      initial={{opacity: 0, x: 100}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -100}}
      transition={{duration: 0.5}}
    >
      <h1>Completa los siguientes datos</h1>

      <div className="container">
          <FormNew />
      </div>
    </motion.div>
  );
};
