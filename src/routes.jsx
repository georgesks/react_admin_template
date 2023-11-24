import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

// Este componente manejará todas tus rutas
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      {/* Puedes agregar una ruta por defecto para redirigir a /page1 */}
      <Route path="/" element={<Page1 />} />
    </Routes>
  );
};

export default AppRoutes;
