import { useState, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Technology from "./pages/Technology";
import Business from "./pages/Business";
import Sport from "./pages/Sport";
import Entertainment from "./pages/Entertainment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Sport" element={<Sport />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Technology" element={<Technology />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
