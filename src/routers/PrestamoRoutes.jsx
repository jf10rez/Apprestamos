import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { NewPrestamo } from "../components/NewPrestamo";
import { ListPrestamos } from "../components/ListPrestamos";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadPrestamos } from "../store/slices/prestamos/prestamoThunks";
import { Units } from "../pages/Units";

export const PrestamoRoutes = () => {

    const dispatch = useDispatch()
    const { dataLoaded } = useSelector( state => state.prestamos )

    useEffect(() => {
      if( !dataLoaded ){
        dispatch( startLoadPrestamos() )
      }
    }, [dispatch])
    
  return (
    <Routes>
      <Route path="/new" element={<NewPrestamo />} />
      <Route path="/list" element={<ListPrestamos />} />
      <Route path="/units" element={<Units />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
