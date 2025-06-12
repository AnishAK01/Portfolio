import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      w-11/12 md:w-2/3 px-8 py-5 rounded-2xl border-2 border-[white] border-l-0 border-r-0 border-t-0 
      backdrop-blur-md bg-[#0f172a]/60 
      transition-all duration-500 ease-in-out 
      ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      <ul className="flex justify-between text-sm sm:text-lg md:text-xl font-semibold text-[#00ffc3]">
        <li onClick={() => scrollToSection('about-anchor')} className="hover:text-[#ff4ecf] transition cursor-pointer">AboutME</li>
        <li onClick={() => scrollToSection('skill-anchor')} className="hover:text-[#ff4ecf] transition cursor-pointer">Skills</li>
        <li onClick={() => scrollToSection('project-anchor')} className="hover:text-[#ff4ecf] transition cursor-pointer">Projects</li>
        <li onClick={() => scrollToSection('contact-anchor')} className="hover:text-[#ff4ecf] transition cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
