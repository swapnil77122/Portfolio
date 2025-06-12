// src/pages/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h2>
      
      <p className="mb-4">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      
      <Link 
        to="/" 
        className="text-blue-600 hover:underline font-medium"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
