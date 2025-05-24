import React, { useEffect, useState } from 'react';

const icons = [
  'skillicon/cIC.png',
  'skillicon/cssIC.png',
  'skillicon/htmlIC.png',
  'skillicon/javaIC.png',
  'skillicon/jsIC.png',
  'skillicon/mongoIC.png',
  'skillicon/neoIC.png',
  'skillicon/nodeIC.png',
  'skillicon/reactIC.png',
  'skillicon/sqlIC.png',
  'skillicon/taailIC.png',
  'skillicon/pythonIC.png'
];

// Utility to check overlap between two rectangles
const isOverlapping = (a, b, size) => {
  return (
    Math.abs(a.top - b.top) < size &&
    Math.abs(a.left - b.left) < size
  );
};

const generateNonOverlappingPositions = (count, size = 10, maxTries = 100) => {
  const positions = [];

  for (let i = 0; i < count; i++) {
    let tries = 0;
    let pos;
    do {
      pos = {
        top: Math.random() * (100 - size),
        left: Math.random() * (85 - size)
      };
      tries++;
    } while (
      positions.some((p) => isOverlapping(p, pos, size)) &&
      tries < maxTries
    );
    positions.push(pos);
  }

  return positions;
};

const Skills = () => {
  const [positions, setPositions] = useState(generateNonOverlappingPositions(icons.length));

  useEffect(() => {
    const handleResize = () => {
      setPositions(generateNonOverlappingPositions(icons.length));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-9/12 max-w-6xl m-auto mt-8 p-4 border rounded-xl shadow-md bg-white flex justify-around items-center">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-[2.5rem] sm:text-[4rem] font-bold text-gray-800">SKILLS</h1>
      </div>

      {/* Icon cloud */}
      <div className="relative h-[300px] sm:h-[400px]  overflow-hidden border rounded-lg bg-gray-100 w-2/4 ">
        {icons.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="h-10 sm:h-12 absolute transition-transform duration-500 hover:scale-125"
            style={{
              top: `${positions[index].top}%`,
              left: `${positions[index].left}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
