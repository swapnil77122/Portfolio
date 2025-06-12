

import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="mb-4">
        Hello! I'm <strong>Swapnil Dhage</strong>, a passionate Data Analyst and Machine Learning enthusiast based in <strong>Bengaluru, India</strong>. 
        I love working on data-driven projects that uncover insights, improve decision-making, and deliver real-world value.
      </p>

      <p className="mb-4">
        My technical toolkit includes Python, Pandas, NumPy, Matplotlib, and Scikit-learn. I enjoy using these tools for predictive modeling, 
        data visualization, and automation. I also have experience with GitHub for version control and collaboration.
      </p>

      <p className="mb-4">
        Some of my recent projects on GitHub involve web scraping, statistical analysis, and machine learning applications.
      </p>

      <p>
        You can check out my work and repositories on my GitHub profile:<br />
        <a 
          href="https://github.com/swapnil77122" 
          className="text-blue-600 hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          github.com/swapnil77122
        </a>
      </p>
    </div>
  );
};

export default About;
