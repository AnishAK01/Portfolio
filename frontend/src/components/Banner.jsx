import React from 'react';

const Banner = () => {
  return (
    <div className="border border-black w-[98%] h-5/6 m-auto mt-4 rounded-2xl px-4 relative shadow-md overflow-hidden flex">
      {/* h1 behind - z-10 */}
      <h1 className="text-7xl md:text-[10rem] text-center tracking-[16px] text-green-500 bg-green-900 p-4 absolute inset-0  items-center z-10 opacity-50
      bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
        FULLSTACK <br /> DEVELOPER
      </h1>

      {/* Foreground content - z-20 */}
      <div className="z-20 px-6 rounded-xl relative flex w-full justify-evenly items-end ">
        <div className="h-full w-64  p-2 justify-end flex-col flex">
          <h4 className="text-xl  font-bold">Name</h4>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste iure voluptatum numquam a optio esse. Est, qui quisquam. Consequatur voluptates sunt, at laborum quas perspiciatis nemo officiis deserunt possimus.
          </p>
        </div>
        <div className="profilepic mt-4  w-7/12  h-full">
          <img
            src="/BannerProfile.webp"
            alt="Profile"
            className="rounded-full w-full h-full object-cover "
          />
        </div>
        <div>
          <button><img src="" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
