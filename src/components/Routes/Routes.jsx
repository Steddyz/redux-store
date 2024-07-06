import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
