import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Login } from "../components/Login";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { SideBar } from "../components/SideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../store/slices/auth/authThunks";
import { PrestamoRoutes } from "./PrestamoRoutes";
import { useMediaQuery } from 'react-responsive'
import { NavbarResponsive } from "../components/NavbarResponsive";

export const AnimatedRoutes = () => {
  const location = useLocation();
  
  const { checking, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( startChecking() )
  }, [ dispatch ])

  const isResponsive = useMediaQuery({
    query: '(max-width: 777px)'
  })

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
              {
                isResponsive 
                ? <NavbarResponsive />
                : <SideBar />
              }
              
              <div className="max">
                  <PrestamoRoutes />
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
