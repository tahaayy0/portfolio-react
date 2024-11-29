import React from "react";
import { abilities } from "../data/abilities";

const About = () => {
  return (
    <div className="p-6 bg-gray-200" id="about">
      <h2 className="text-4xl font-bold mb-6 text-center">Hakkımda</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start max-w-[70%] mx-auto">
     
        <div className="bg-white p-6 rounded-lg shadow col-span-2">
          <h2 className="text-2xl font-bold text-center mb-10">Merhaba!</h2>
          <p className="bg-white text-gray-600">
            Merhaba! Ben yazılım geliştirme alanında tutkulu bir bireyim. React,
            JavaScript ve modern web teknolojilerinde deneyim sahibiyim.
            Problem çözme ve yeni teknolojiler öğrenme konusunda hevesliyim.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center mb-10 ">Becerilerim</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 ">
            {abilities.map((ability, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="text-xl font-semibold">{ability.name}</h3>
                <p className="text-gray-600">{ability.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;
