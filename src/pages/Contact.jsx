// src/pages/Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>

      <p className="mb-4">
        I'm open to opportunities, collaborations, and conversations about data, analytics, and technology. 
        Feel free to reach out through any of the platforms below:
      </p>

      <ul className="space-y-2">
        <li>
          📧 Email: 
          <a 
            href="mailto:swapnildhage7885@gmail.com" 
            className="text-blue-600 hover:underline ml-1"
          >
            swapnildhage7885@gmail.com
          </a>
        </li>

        <li>
          💼 LinkedIn: 
          <a 
            href="https://www.linkedin.com/in/swapnil-dhage-393610278" 
            className="text-blue-600 hover:underline ml-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/in/swapnil-dhage-393610278
          </a>
        </li>

        <li>
          🖥️ GitHub: 
          <a 
            href="https://github.com/swapnil77122" 
            className="text-blue-600 hover:underline ml-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            github.com/swapnil77122
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
