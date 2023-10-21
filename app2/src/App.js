import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

import "./App.css";

const links = [
  { to: '/', label: 'Home' },
  { to: '/About', label: 'About' },
  { to: '/Contact', label: 'Contact' }
];

export default function App() {
  const [activeLink, setActiveLink] = useState(null);

  const changeColor = (currentColor) => (currentColor === 'blue' ? 'red' : 'blue');

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <Router>
        <div className="linksss">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={`${link.label} ${activeLink === index ? changeColor('blue') : 'blue'}`}
              onClick={() => handleLinkClick(index)}
            >
              {link.label}
            </NavLink>
          ))}
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
