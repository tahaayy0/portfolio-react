import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold mx-5 ">Taha Yerdekalmazer</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Ana Sayfa</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projelerim</a></li>
          <li><a href="#referances" className="hover:text-gray-400">Referanslarım</a></li>
          <li><a href="#about" className="hover:text-gray-400">Hakkımda</a></li>
          <li><a href="#contact" className="hover:text-gray-400">İletşim</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
