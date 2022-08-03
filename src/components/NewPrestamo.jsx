import { FormNew } from "./FormNew";
import { motion } from 'framer-motion'
import { useMediaQuery } from "react-responsive";

export const NewPrestamo = () => {
  const isResponsive = useMediaQuery({
    query: '(max-width: 777px)'
  })
  return (
    <motion.div className="new"
    initial={{ width: "0vw", x: "100" }}
    animate={{ width: isResponsive ? "100vw" : "51vw", x: 0 }}
    transition={{ duration: 1, origin: 1 }}
    >
      <h1>Completa los siguientes datos</h1>

      <div className="container">
          <FormNew />
      </div>
    </motion.div>
  );
};
