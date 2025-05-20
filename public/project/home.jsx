import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-[#F3ECDD] text-black min-h-screen flex flex-col justify-between px-6 py-10 relative">
        {/* Navigation */}
        <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 font-['AlekanBold']">
          <ul className="flex space-x-6 text-sm md:text-base uppercase tracking-wider">
            <li>
              <a href="#home" className="hover:underline">
                home
              </a>
            </li>
            <li>
              <a href="#achievement" className="hover:underline">
                achievement
              </a>
            </li>
            <li>
              <a href="#project" className="hover:underline">
                project
              </a>
            </li>
          </ul>
        </nav>

        {/* Teks Utama */}
        <div className="flex-grow flex flex-col justify-center items-center text-center font-['AlekanBold'] mt-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl leading-tight tracking-[.20em]">
            KREATIF &nbsp;·&nbsp; ITU <br className="hidden md:block" />
            <span className="block mt-4">HARUSS!</span>
          </h1>
        </div>

        {/* Footer Keterangan */}
        <div className="flex justify-between items-end text-base md:text-lg  w-full mt-10 px-2">
          <p className="font-mono">
            @WILDAN<sup className="text-xs align-super">(08)</sup>
          </p>
          <p className="font-mono">kelahiran 2008</p>
        </div>
      </header>

      {/* BIODATA */}
      <section className="bg-[#F3ECDD] px-8 md:px-60 py-44 text-justify font-['AlekanBold'] leading-relaxed text-base md:text-4xl">
        <p>
          Hallo, Nama saya Wildan dengan nama lengkap Perdana Muhammad
          Wildanumukhaladun. Sekolah di Pondok Tahfizh Plus Abu Dzar dan
          sekarang saya berada di bangku SMA, dengan umur 16 tahun
        </p>
      </section>

      {/* SKILLS */}
      <div className="min-h-screen bg-[#F3ECDD] flex flex-col items-center px-8 md:px-36 py-28">
        <h1 className="text-xl sm:text-2xl font-bold self-start mb-12 font-['AlekanBold']">
          MY SKILLS :
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/project/icons/html-5.png"
              alt="HTML5"
              className="w-20 h-20 object-contain mb-5"
            />
            <p className="text-sm font-medium">HTML5</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/project/icons/css-3.png"
              alt="CSS3"
              className="w-20 h-20 object-contain mb-5"
            />
            <p className="text-sm font-medium">CSS3</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/project/icons/js.png"
              alt="JavaScript"
              className="w-20 h-20 object-contain mb-5"
            />
            <p className="text-sm font-medium">JAVASCRIPT</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/project/icons/Tailwind.svg"
              alt="TailwindCSS"
              className="w-20 h-20 object-contain mb-5"
            />
            <p className="text-sm font-medium">TAILWINDCSS</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/project/icons/react.png"
              alt="React"
              className="w-20 h-20 object-contain mb-5"
            />
            <p className="text-sm font-medium">REACT</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/project/icons/figma.png"
              alt="Figma"
              className="w-20 h-20 object-contain mb-5"
            />
            <p className="text-sm font-medium">FIGMA</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/project/icons/chat-gpt.png"
              alt="Figma"
              className="w-20 h-20 object-contain mb-5"
            />
            <p className="text-sm font-medium">GPT PROMPT</p>
          </div>
        </div>
      </div>

      {/* CONTACT ME */}
      <section
        id="contact"
        className="bg-[#F3ECDD] pt-44 pb-8 px-4 flex justify-center"
      >
        <div className="text-white font-['AlekanBold'] rounded-xl shadow-lg w-full max-w-[1150px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Kiri: Judul & Deskripsi */}
          <div className="bg-[#18172F] px-12 py-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
              Hubungi <br /> Saya
            </h2>
            <p className="text-lg md:text-2xl font-normal tracking-wide font-['Alekan'] leading-relaxed">
              Jika kamu tertarik berkolaborasi atau ingin mengenal lebih jauh,
              jangan ragu untuk menghubungi saya, terimakasih :
            </p>
          </div>

          {/* Kanan: Sosial Media */}
          <div className="bg-[#101021] px-12 py-16 space-y-8 text-base md:text-xl">
            <div className="flex items-center gap-6">
              <img
                src="/project/icons/github.png"
                alt="GitHub"
                className="w-8 h-8"
              />
              <span>@blablabla</span>
            </div>
            <div className="flex items-center gap-6">
              <img
                src="/project/icons/telegram.png"
                alt="Telegram"
                className="w-8 h-8"
              />
              <span>@blablabla</span>
            </div>
            <div className="flex items-center gap-6">
              <img
                src="/project/icons/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
              <span>@blablabla</span>
            </div>
            <div className="flex items-center gap-6">
              <img
                src="/project/icons/instagram.png"
                alt="Instagram"
                className="w-8 h-8"
              />
              <span>@blablabla</span>
            </div>
            <div className="flex items-center gap-6">
              <img
                src="/project/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-8 h-8"
              />
              <span>+62 812-345-6789</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#E1D9C7] text-center text-sm md:text-base py-6 font-['AlekanBold']">
        <p>© 2025 Wildan. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Header;
