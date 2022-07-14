import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "../components/Dashboard";
import { NewPrestamo } from "../components/NewPrestamo";
import { SideBar } from "../components/SideBar";

import "../index.css";

export const Prestamos = () => {
  return (
    <BrowserRouter>
      <SideBar />

      <div className="max">
        <Routes>
          <Route path="/new" element={<NewPrestamo />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
