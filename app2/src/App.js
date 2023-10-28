import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

export default function App() {
  const [homeColor, setHomeColor] = useState('blue');
  const [aboutColor, setAboutColor] = useState('blue');
  const [contactColor, setContactColor] = useState('blue');

  const changeColor = (currentColor) => {
    return currentColor === 'blue' ? 'red' : 'blue';
  };

  const handleHomeClick = () => {
    setHomeColor((prevColor) => changeColor(prevColor));
    setAboutColor(("blue"));
    setContactColor(("blue"));
  };

  const handleAboutClick = () => {
    setAboutColor((prevColor) => changeColor(prevColor));
    setHomeColor(("blue"));
    setContactColor(("blue"));

  };

  const handleContactClick = () => {
    setHomeColor(("blue"));
    setAboutColor(("blue"));
    setContactColor((prevColor) => changeColor(prevColor));
  };

  return (
    <>
    <Router>
      <div className="linksss">
        <Link to='/' className={`Home ${homeColor}`} onClick={handleHomeClick}>Home</Link>
        <Link to='/About' className={`About ${aboutColor}`} onClick={handleAboutClick}>About</Link>
        <Link to='/Contact' className={`Contact ${contactColor}`} onClick={handleContactClick}>Contact</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />

      </Routes>
    </Router>

    
    </>

  );
}

function Home() {
  return "Home";
}

function About() {
  return "About";
}

function Contact() {
  return "Contact";
}