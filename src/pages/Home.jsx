import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Heading top-left */}
      <h2 className="text-3xl font-bold mb-6 text-left">Welcome to My Portfolio</h2>

      {/* Flex container for image + text */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left side - image */}
        <div className="md:w-1/2">
          <img
            src="https://www.datocms-assets.com/21211/1602248694-github-img.jpg?auto=format&w=807"
            alt="Data analysis illustration"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right side - text */}
        <div className="md:w-1/2">
          <p className="mb-4">
            Hi, I’m <strong>Swapnil Dhage</strong> — a Data Analyst and Machine Learning enthusiast based in Bengaluru, India.
            I’m passionate about working with data to solve real-world problems, automate tasks, and create visual stories that inspire action.
          </p>

          <p className="mb-4">
            This site serves as a central hub to explore my professional journey, personal projects, and contact information.
            Navigate through the pages to learn more about me and my work.
          </p>

          <p className="italic text-white-600">
            “Turning data into insight is not magic, it's skill — and I'm always learning.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
