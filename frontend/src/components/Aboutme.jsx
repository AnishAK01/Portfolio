import React from 'react';

const Aboutme = () => {
  return (
    <div className="flex justify-evenly w-9/12 m-auto mt-4 p-4 h-64 items-center 
      border border-[#4e54ff] rounded-2xl backdrop-blur-md backdrop-brightness-75 
      shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-transparent transition-all duration-500">
      
      <div className="w-auto text-[4rem] font-bold text-transparent bg-gradient-to-r from-[#ff4ecf] via-[#00ffc3] to-[#4e54ff] bg-clip-text">
        <h2>ABOUT...ME</h2>
      </div>

      <div className="w-2/5 text-[#cccccc] text-sm border-l-2 border-[#ff4ecf] pl-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo
        necessitatibus illum nesciunt quos ab non porro voluptates. Et, corrupti.
        Reiciendis necessitatibus vitae rerum a magni voluptates vero non quisquam.
      </div>
    </div>
  );
};

export default Aboutme;
