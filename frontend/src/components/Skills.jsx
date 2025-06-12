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
    <div className="w-9/12 max-w-6xl m-auto mt-8 p-6 rounded-2xl border border-[#4e54ff] 
      backdrop-blur-md backdrop-brightness-75 shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-transparent transition-all">
      
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-[2.5rem] sm:text-[4rem] font-bold text-transparent bg-gradient-to-r from-[#ff4ecf] via-[#00ffc3] to-[#4e54ff] bg-clip-text">
          SKILLS
        </h2>
      </div>

      {/* Icon cloud */}
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden border border-[#00ffc3] rounded-lg bg-[#ffffff0a]">
        {icons.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="h-10 sm:h-12 absolute transition-transform duration-500 hover:scale-125 drop-shadow-[0_0_1px_#ffffff]"
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
