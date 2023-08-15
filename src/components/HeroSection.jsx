import React from 'react';

function HeroSection() {
  const titleGenerator = () => {
    const titles = ["Empowering Software", "Building Tomorrow", "Creating Digital Magic"];
    return titles[Math.floor(Math.random() * titles.length)];
  };

  return (
    <div className="bg-dark p-4 rounded-md text-primary-teal">
      <h1>{titleGenerator()}</h1>
      {/* Add other hero content here */}
    </div>
  );
}

export default HeroSection;
