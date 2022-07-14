import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { NewPrestamo } from "../components/NewPrestamo";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/new" element={<NewPrestamo />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
};
