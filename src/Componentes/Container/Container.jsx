import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Container.css";
import Inicio from "../../Pages/Inicio";
import Contato from '../../Pages/Contato'
import Portifolio from '../../Pages/Portifolio'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../../Pages/Sobre";
import { useState, useEffect } from "react";
const Container = () => {
  const [darkMode, setDarkMode] = useState(()=>{ 
    const modo = localStorage.getItem('darkMode')
    const qualquer = modo !== "undefined" ? JSON.parse(modo) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(qualquer)
    return qualquer;
  });

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
    console.log("Aquiii")
  };

 useEffect(()=>{
  document.body.classList.toggle("dark", darkMode);
  localStorage.setItem("darkMode", JSON.stringify(darkMode))

 },[darkMode])
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Inicio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/inicio" element={<Inicio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/portifolio" element={<Portifolio  />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Container;
