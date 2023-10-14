import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <>


    <Router>
      <div className="linksss">
      <Link to='/' className="Home">Home</Link>
      <Link to='/About'className="About">About</Link>
      <Link to='/Contact' className="Contact">Contact</Link>
      </div>

      <Routes>
      <Route path='/' element={<Home/>} />

      </Routes>
      
    </Router>
    
    </>
  );
}

function Home() {
  return "AA";
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

