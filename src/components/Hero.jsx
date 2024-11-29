import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Merhaba, Ben Taha Yerdekalmazer</h1>
        <p className="text-xl mt-4">Computer Engineer</p>
        <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700">İletişime Geç</a>
      </div>
    </section>
  );
};

export default Hero;
