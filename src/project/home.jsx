import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#3C3C3C] text-white h-screen flex flex-col justify-center items-center relative px-4">
      {/* Nav di tengah atas */}
      <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 font-['ChunkoBold']">
        <ul className="flex space-x-4 text-sm md:text-base">
          <li><a href="#home" className="hover:underline">home</a></li>
          <li><a href="#story" className="hover:underline">story</a></li>
          <li><a href="#skills" className="hover:underline">skills</a></li>
          <li><a href="#project" className="hover:underline">project</a></li>
        </ul>
      </nav>

      {/* Bagian utama: container flex responsive */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-full">
        {/* Div kiri kosong */}
        <div className="hidden md:block md:w-1/2"></div>

        {/* Div kanan untuk h1 & p */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:px-0 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold mb-2 font-['ChunkoBold']">Hello, I’m <br />Wildan</h1>
          <p className="text-sm md:text-lg">- Seorang Pelajar di pondok tahfizh plus Abu Dzar</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
