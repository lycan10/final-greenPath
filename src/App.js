import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ServicesPage from "./pages/servicesPage/ServicesPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path='/' element={<Navigate to= '/greenpath'/>} /> */}
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
