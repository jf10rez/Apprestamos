import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { NewPrestamo } from "../components/NewPrestamo";
import { AnimatePresence } from "framer-motion";
import { ListPrestamos } from "../components/ListPrestamos";
import { Login } from "../components/Login";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { SideBar } from "../components/SideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../store/slices/auth/authThunks";

export const AnimatedRoutes = () => {
  const location = useLocation();
  
  const { checking, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( startChecking() )
  }, [ dispatch ])

  if( checking ){
    return <h1>Cargando...</h1>
  }
  


  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute uid={user?.uid}>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/*"
          element={
            <PrivateRoute uid={user?.uid}>
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
