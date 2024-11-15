import React, { useState } from "react";

const CardSection = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const cardData = [
    {
      image: "maxon-removebg-preview.png",
      description:
        "If you are creating Cinema 4D or working with Body Paint 3D functionality - Maxon provides online resources like video tutorials and online documentation for the same",
      btn: "Request a Demo →",
    },
    {
      image: "maxon-removebg-preview.png",
      description:
        "If you are creating Cinema 4D or working with Body Paint 3D functionality - Maxon provides online resources like video tutorials and online documentation for the same",
      btn: "Request a Demo →",
    },
    {
      image: "maxon-removebg-preview.png",
      description:
        "If you are creating Cinema 4D or working with Body Paint 3D functionality - Maxon provides online resources like video tutorials and online documentation for the same",
      btn: "Request a Demo →",
    },
    {
      image: "maxon-removebg-preview.png",
      description:
        "If you are creating Cinema 4D or working with Body Paint 3D functionality - Maxon provides online resources like video tutorials and online documentation for the same",
      btn: "Request a Demo →",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row mx-auto h-full bg-black max-w-screen-2xl p-6 md:p-24">
      {/* Sidebar */}
      <aside className="w-full min-w-64 md:w-3/12 h-full hidden md:block">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Search by categories
        </h2>
        <div className="w-56 h-[1px] bg-gray-700 mb-8"></div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 w-60 rounded-full py-1 px-2 bg-yellow-500 group">
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full p-4">
              🎬
            </div>
            <a href="#" className="text-black">
              Media & Entertainment
            </a>
          </li>
          <li className="flex items-center space-x-2 hover:bg-yellow-500 w-60 rounded-full py-1 px-2 group">
            <div className="w-6 h-6 flex items-center justify-center group-hover:bg-white rounded-full p-4">
              🔧
            </div>
            <a href="#" className="text-gray-400 group-hover:text-black">
              ACE
            </a>
          </li>
          <li className="flex items-center space-x-2 hover:bg-yellow-500 w-60 rounded-full py-1 px-2 group">
            <div className="w-6 h-6 flex items-center justify-center group-hover:bg-white rounded-full p-4">
              ⚙️
            </div>
            <a href="#" className="text-gray-400 group-hover:text-black">
              Manufacturing
            </a>
          </li>
          <li className="flex items-center space-x-2 hover:bg-yellow-500 w-60 rounded-full py-1 px-2 group">
            <div className="w-6 h-6 flex items-center justify-center group-hover:bg-white rounded-full p-4">
              📚
            </div>
            <a href="#" className="text-gray-400 group-hover:text-black">
              Education
            </a>
          </li>
          <li className="flex items-center space-x-2 hover:bg-yellow-500 w-60 rounded-full py-1 px-2 group">
            <div className="w-6 h-6 flex items-center justify-center group-hover:bg-white rounded-full p-4">
              🏛️
            </div>
            <a href="#" className="text-gray-400 group-hover:text-black">
              Government
            </a>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="w-[17rem] mx-auto  md:w-9/12 h-full">
        {/* Hamburger icon */}
        <div className="flex items-center md:hidden text-white text-2xl bg-zinc-900 px-3 py-1 rounded-lg mb-1">
          <button onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
            <i className="fas fa-bars"></i>
          </button>
          <p className="mx-auto text-lg">Search by categories</p>
        </div>

        {/* Hamburger Wrapper */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isHamburgerOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-2 block md:hidden bg-zinc-900 mb-5 p-5 rounded-lg">
            <li className="flex items-center space-x-2 w-60 rounded-full py-1 px-2 bg-yellow-500 group">
              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full p-4">
                🎬
              </div>
              <a href="#" className="text-black">
                Media & Entertainment
              </a>
            </li>
            <li className="flex items-center space-x-2 hover:bg-yellow-500 w-60 rounded-full py-1 px-2 group">
              <div className="w-6 h-6 flex items-center justify-center group-hover:bg-white rounded-full p-4">
                🔧
              </div>
              <a href="#" className="text-gray-400 group-hover:text-black">
                ACE
              </a>
            </li>
            <li className="flex items-center space-x-2 hover:bg-yellow-500 w-60 rounded-full py-1 px-2 group">
              <div className="w-6 h-6 flex items-center justify-center group-hover:bg-white rounded-full p-4">
                ⚙️
              </div>
              <a href="#" className="text-gray-400 group-hover:text-black">
                Manufacturing
              </a>
            </li>
            <li className="flex items-center space-x-2 hover:bg-yellow-500 w-60 rounded-full py-1 px-2 group">
              <div className="w-6 h-6 flex items-center justify-center group-hover:bg-white rounded-full p-4">
                📚
              </div>
              <a href="#" className="text-gray-400 group-hover:text-black">
                Education
              </a>
            </li>
            <li className="flex items-center space-x-2 hover:bg-yellow-500 w-60 rounded-full py-1 px-2 group">
              <div className="w-6 h-6 flex items-center justify-center group-hover:bg-white rounded-full p-4">
                🏛️
              </div>
              <a href="#" className="text-gray-400 group-hover:text-black">
                Government
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full p-3 mb-6 rounded-xl bg-zinc-900 flex items-center space-x-3">
          {/* Search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by product name"
            className="w-full text-gray-400 text-sm md:text-base outline-none bg-transparent"
          />
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {cardData.map((elem, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-lg w-full sm:w-64 md:w-3/12 min-w-[260px] h-72"
            >
              <img src={elem.image} className="mx-auto py-6" alt="" />
              <div className="w-full h-[1px] bg-zinc-800 mb-4"></div>
              <div className="p-4">
                <p className="text-gray-400 text-xs mb-6">{elem.description}</p>
                <a href="#" className="text-yellow-400 text-sm font-semibold">
                  {elem.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CardSection;
