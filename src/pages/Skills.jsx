import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    id: uuidv4(),
    name: 'Heart Disease Prediction',
    tech: 'Logistic Regression, Python',
    link: 'https://github.com/swapnil77122/Heart_disease_prediction',
  },
  {
    id: uuidv4(),
    name: 'React Card',
    tech: 'HTML, CSS, JS',
    link: 'https://github.com/swapnil77122/profilecard-react-',
  },
  {
    id: uuidv4(),
    name: 'Content Engine',
    tech: 'Python, Streamlit',
    link: 'https://github.com/swapnil77122/ContentEngine',
  },
  {
    id: uuidv4(),
    name: 'Log Analysis',
    tech: 'Python Flask',
    link: 'https://github.com/swapnil77122/Log-analysis',
  },
  {
    id: uuidv4(),
    name: 'Command Control Project',
    tech: 'Python Streamlit',
    link: 'https://github.com/swapnil77122/command-control-project',
  },
];

const Skills = () => {
  useEffect(() => {
    console.log('Shared Communication - Skills component loaded');
  }, []);

  const handleClick = (id, name) => {
    console.log(`Clicked project: "${name}" with UUID: ${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Skills & Projects</h2>
      <p className="mb-4">
        Below are some of my frontend projects using HTML, CSS, JavaScript, Python, and Machine Learning.
      </p>

      <ul className="space-y-4">
        {projects.map(({ id, name, tech, link }) => (
          <li
            key={id}
            className="flex justify-between items-center border-b border-gray-700 pb-2"
          >
            <div>
              <span className="font-medium">{name}</span>
              <p className="text-sm text-gray-400">{tech}</p>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-4"
              onClick={() => handleClick(id, name)}
            >
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
