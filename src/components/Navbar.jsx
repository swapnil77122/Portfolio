// src/components/Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `px-3 py-2 rounded hover:bg-white-100 ${
      location.pathname === path ? 'text-blue-600 font-semibold' : ''
    }`;

  return (
    <nav className="bg-[#0d1117] shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white-800">Swapnil Portfolio</h1>
        <div className="space-x-4">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/about" className={linkClass('/about')}>About</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
<Link to="/skills" className={linkClass('/skills')}>Skills</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
