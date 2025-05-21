import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    < div className="bg-[#F3ECDD]">
      <header className="bg-[#F3ECDD] text-black min-h-screen flex flex-col justify-between px-6 py-10 relative">
        {/* Navigation */}
        <nav
          className="absolute top-10 left-1/2 transform -translate-x-1/2 font-['AlekanBold']"
          data-aos="fade-down"
        >
          <ul className="flex space-x-6 text-sm md:text-base uppercase tracking-wider">
            <li><a href="#home" className="hover:underline">home</a></li>
            <li><a href="#achievement" className="hover:underline">achievement</a></li>
            <li><a href="#project" className="hover:underline">project</a></li>
          </ul>
        </nav>

        {/* Teks Utama */}
        <div
          className="flex-grow flex flex-col justify-center items-center text-center font-['AlekanBold'] mt-12 bg-[#101021]"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl leading-tight tracking-[.20em] text-white">
            KREATIF &nbsp;·&nbsp; ITU <br className="hidden md:block" />
            <span className="block mt-4">HARUSS!</span>
          </h1>
        </div>

        {/* Footer Keterangan */}
        <div
          className="flex justify-between items-end text-base md:text-lg w-full mt-10 px-2"
          data-aos="fade-up"
        >
          <p className="font-mono">@WILDAN<sup className="text-xs align-super">(08)</sup></p>
          <p className="font-mono">kelahiran 2008</p>
        </div>
      </header>

      {/* BIODATA */}
      <section
        className="bg-[#F3ECDD] px-8 md:px-60 py-44 text-justify font-['AlekanBold'] leading-relaxed text-base md:text-4xl"
        data-aos="fade-up"
      >
        <p>
          Hallo, Nama saya Wildan dengan nama lengkap Perdana Muhammad
          Wildanumukhaladun. Sekolah di Pondok Tahfizh Plus Abu Dzar dan
          sekarang saya berada di bangku SMA, dengan umur 16 tahun.
        </p>
      </section>

      {/* SKILLS */}
      <div
        className="min-h-screen bg-[#F3ECDD] flex flex-col items-center px-8 md:px-36 py-28"
        data-aos="fade-up"
      >
        <h1 className="text-xl sm:text-2xl font-bold self-start mb-12 font-['AlekanBold']">
          MY SKILLS :
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16">
          {[
            ["html-5.png", "HTML5"],
            ["css-3.png", "CSS3"],
            ["js.png", "JAVASCRIPT"],
            ["Tailwind.svg", "TAILWINDCSS"],
            ["react.png", "REACT"],
            ["figma.png", "FIGMA"],
            ["chat-gpt.png", "GPT PROMPT"]
          ].map(([src, label], i) => (
            <div
              key={label}
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <img
                src={`/project/icons/${src}`}
                alt={label}
                className="w-20 h-20 object-contain mb-5"
              />
              <p className="text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT ME */}
      <section
        id="contact"
        className="bg-[#F3ECDD] pt-44 pb-8 px-4 flex justify-center"
        data-aos="fade-up"
      >
        <div className="text-white font-['AlekanBold'] rounded-xl shadow-lg w-full max-w-[1150px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Kiri: Judul & Deskripsi */}
          <div className="bg-[#18172F] px-12 py-16" data-aos="fade-right">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
              Hubungi <br /> Saya
            </h2>
            <p className="text-lg md:text-2xl font-normal tracking-wide font-['Alekan'] leading-relaxed">
              Jika kamu tertarik berkolaborasi atau ingin mengenal lebih jauh,
              jangan ragu untuk menghubungi saya, terimakasih :)
            </p>
          </div>

          {/* Kanan: Sosial Media */}
          <div className="bg-[#101021] px-12 py-16 space-y-8 text-base md:text-xl" data-aos="fade-left">
            {[
              ["github.png", "@wildanGithub"],
              ["telegram.png", "@wildanTelegram"],
              ["linkedin.png", "@wildanLinkedin"],
              ["instagram.png", "@wildanInstagram"],
              ["whatsapp.png", "+62 812-345-6789"]
            ].map(([icon, label]) => (
              <div className="flex items-center gap-6" key={label}>
                <img src={`/project/icons/${icon}`} alt={label} className="w-8 h-8" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="bg-[#E1D9C7] text-center text-sm md:text-base py-6 font-['AlekanBold']"
      >
        <p>© 2025 Wildan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Header;
