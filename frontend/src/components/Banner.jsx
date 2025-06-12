import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowNavbar(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNavbar = () => {
    const target = document.getElementById('navbar-anchor');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-transparent border border-[#4e54ff] backdrop-blur-md backdrop-brightness-75 shadow-[0_0_20px_rgba(255,255,255,0.05)] w-[98%] h-4/5 m-auto mt-4 rounded-2xl px-4 relative overflow-hidden flex">
      
      {/* Background Text */}
      <h1 className="text-7xl md:text-[8rem] text-center tracking-[15px] p-4 absolute inset-0 flex items-center justify-center z-10 opacity-60
      text-transparent bg-gradient-to-r from-[#4e54ff] via-[#00ffc3] to-[#ff4ecf] bg-clip-text font-bold">
        FULLSTACK <br /> DEVELOPER
      </h1>

      {/* Foreground content */}
      <div className="z-20 px-6 rounded-xl relative flex w-full justify-evenly items-end">
        <div className="h-full w-64 p-2 justify-end flex-col flex">
          <h4 className="text-xl font-bold text-[#eaeaea]">Your Name</h4>
          <p className="text-sm text-[#aaaaaa]">
            Passionate fullstack developer with a flair for building clean, responsive, and accessible web applications.
          </p>
        </div>

        <div className="profilepic mt-4 w-7/12 h-full">
          <img
            src="/BannerProfile.webp"
            alt="Profile"
            className="w-full h-full object-cover "
          />
        </div>

        <div>
          <button
            className="mb-4 transition-transform hover:scale-110"
            onClick={scrollToNavbar}
            aria-label="Scroll Down"
          >
            <img src="Icons/down-arrow_10255541.png" className="h-14" alt="Scroll Down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
