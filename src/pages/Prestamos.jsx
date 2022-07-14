import { BrowserRouter } from "react-router-dom";
import { SideBar } from "../components/SideBar";

import "../index.css";
import { AnimatedRoutes } from "../routers/AnimatedRoutes";

export const Prestamos = () => {
  return (
    <BrowserRouter>
      <SideBar />

      <div className="max">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
};
