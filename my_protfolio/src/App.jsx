import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Projects from "./Screens/Projects";
import Home from "./Screens/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
