import React from "react";

const CreativeCard = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen bg-black">
        <div className=" relative bg-zinc-900 text-white rounded-3xl px-8 md:px-0 py-16  w-[85%] h-[27rem] md:h-96 text-start md:text-center">
          <img
            src="diamond2.svg"
            alt="diamond1"
            className=" w-20 md:w-44 absolute top-1 md:top-9 left-0"
          />
          <img
            src="diamond1.svg"
            alt="diamond2"
            className="w-20 md:w-44 absolute right-2 md:right-12 bottom-0 md:bottom-8"
          />
          {/* Content  */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Design support for all your
            <br /> creative needs
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mb-8 whitespace-">
            Get a free introduction and discover how you and your team
            <br />
            can change the way your source design forever
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full shadow hover:bg-yellow-600">
              Become a Seller →
            </button>
            <button className="bg-yellow-500 md:bg-white text-black px-6 py-2 rounded-full shadow hover:bg-gray-200">
              Request a Demo →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeCard;
