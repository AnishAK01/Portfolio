import React, { useEffect, useRef } from 'react';

const ParallaxWrapper = ({ children }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 20; // Adjust multiplier for intensity
      const offsetY = (e.clientY / innerHeight - 0.5) * 20;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{ backgroundImage: `url('/yourBackground.jpg')`, zIndex: -1 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;
