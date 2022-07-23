import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { NewPrestamo } from "../components/NewPrestamo";
import { AnimatePresence } from "framer-motion";
import { ListPrestamos } from "../components/ListPrestamos";
import { Login } from "../components/Login";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { SideBar } from "../components/SideBar";

export const AnimatedRoutes = () => {
  const location = useLocation();
  const uid = true;
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute uid={uid}>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/*"
          element={
            <PrivateRoute uid={uid}>
              <SideBar />
              <div className="max">
                <Routes>
                  <Route path="/new" element={<NewPrestamo />} />
                  <Route path="/list" element={<ListPrestamos />} />
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
