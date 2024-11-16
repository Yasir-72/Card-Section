import React from "react";
import cinema4d from "../../public/cinema4d-svgrepo-com.svg";
import zbrush from "../../public/Path 1773.svg";
import redshift from "../../public/Path 1773.svg";
import redgiant from "../../public/Path 1773.svg";
import universe from "../../public/universe.svg";
import roger from "../../public/redshift.svg";
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
      image: redshift,
      name: "RedShift",
    },
    {
      image: redgiant,
      name: "RedGiant",
    },
    {
      image: universe,
      name: "Universe",
    },
    {
      image: roger,
      name: "Roger",
    },
  ];
  return (
    <>
      <div className="bg-zinc-800 h-screen w-[100%] mx-auto ">
        <section className="flex flex-wrap justify-center  py-28 gap-6  mx-auto">
          {smallcardsdata.map((card, index) => (
            <div
              key={index}
              className="flex flex-col py-7 items-center w-44 h-[135px] bg-gradient-to-b from-black to-zinc-900 p-4 shadow-lg hover:shadow-white/40 rounded-xl border border-black hover:border-white transition-shadow duration-300"
            >
              <img src={card.image} className="mb-5 w-10" alt="" />
              <p className="text-xl text-white font-medium">{card.name}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
export default Maxonpage;
