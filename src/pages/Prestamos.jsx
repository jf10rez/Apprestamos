import { BrowserRouter } from "react-router-dom";

import "../index.css";
import { AnimatedRoutes } from "../routers/AnimatedRoutes";

export const Prestamos = () => {
  return (
    <BrowserRouter>
        <AnimatedRoutes />
    </BrowserRouter>
  );
};
