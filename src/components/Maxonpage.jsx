import React from "react";
import cinema4d from "../../public/cinema4d-svgrepo-com.svg";
import zbrush from "../../public/Path 1773.svg";
const Maxonpage = () => {
  const smallcardsdata = [
    {
      image: cinema4d,
      name: "Cinema 4D",
    },
    {
      image: zbrush,
      name: "ZBrush",
    },
    {
      image: "universe-removebg-preview.png",
      name: "Card Content",
    },
    {
      image: "universe-removebg-preview.png",
      name: "Card Content",
    },
    {
      image: "universe-removebg-preview.png",
      name: "Card Content",
    },
    {
      image: "universe-removebg-preview.png",
      name: "Card Content",
    },
  ];
  return (
    <>
      <div className="bg-zinc-900 h-screen ">
        <section className="flex flex-wrap justify-center py-28 gap-6 w-[90%] mx-auto">
          {smallcardsdata.map((card, index) => (
            <div
              key={index}
              className="flex flex-col py-7 items-center w-44 h-32 bg-gradient-to-b from-black to-zinc-900 p-4 shadow-lg hover:shadow-white/20 rounded-xl hover:border border-gray-50 transition-shadow duration-300"
            >
              <img src={card.image} className="mb-5" alt="" />
              <p className="text-sm text-white">{card.name}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
export default Maxonpage;
