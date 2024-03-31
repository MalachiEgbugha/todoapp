import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Edit from './Pages/Edit';




const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/edit" element={<Edit/>} /> 
      
       
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
