import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "../components/Dashboard";
import { SideBar } from "../components/SideBar";

import "../index.css";

export const Prestamos = () => {
  return (
    <BrowserRouter>
      <SideBar />

      <div className="max">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
