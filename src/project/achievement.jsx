import achievementData from "./aData.json";
import { Link } from "react-router-dom";

export default function AchievementSection() {
  const specialColorMap = {
    HTML: "#FF5733",       // HTML merah
    CSS: "#2196F3",        // CSS biru
    JavaScript: "#FFCA28", // JS kuning
    Tailwind: "#38BDF8",   // Tailwind biru muda
    React: "#61DAFB",      // React biru langit
    Figma: "#A259FF",      // Figma ungu
  };

  return (
    <div className="bg-[#F2EEDC] min-h-screen">
      <header className="bg-[#F3ECDD] text-black flex justify-center py-6 px-4 md:px-10 sticky top-0 z-50">
        <nav className="font-['AlekanBold']">
          <ul className="flex space-x-6 text-sm md:text-base uppercase tracking-wider">
            <Link to="/" className="hover:underline">
              home
            </Link>
            <Link to="/achievement" className="hover:underline">
              achievement
            </Link>
            <Link to="/project" className="hover:underline">
              project
            </Link>
          </ul>
        </nav>
      </header>

      <section
        id="achievement"
        className="px-6 md:px-[70px] py-12 *:font-['Alekan']"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-black mb-12">
          MY <br /> ACHIEVEMENT
        </h1>

        {/* Achievement utama */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 uppercase">
            Achievement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementData.achievement.map((item, index) => (
              <div
                key={index}
                className="bg-[#0D0D1B] text-white p-6 md:p-8 rounded shadow-md"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase">
                  {item.judul}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  {item.isi}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Another Achievement */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 uppercase">
            Another Achievement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementData.anotherAchievement.map((item, index) => {
              const colorKey = Object.keys(specialColorMap).find((key) =>
                item.judul.toLowerCase().includes(key.toLowerCase())
              );
              const barColor = colorKey ? specialColorMap[colorKey] : "#0D0D1B";

              return (
                <div
                  key={index}
                  className="bg-white border border-[#0D0D1B] p-6 rounded shadow-md"
                >
                  <h3
                    className="text-lg md:text-xl font-semibold mb-2 uppercase"
                    style={{ color: colorKey ? barColor : "black" }}
                  >
                    {item.judul}
                  </h3>
                  <p className="text-sm text-gray-800 mb-2 font-bold">{item.isi}</p>
                  <div className="h-2 w-full bg-gray-300 rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: item.persen,
                        backgroundColor: barColor,
                      }}
                    ></div>
                  </div>
                  <p className="text-right text-xs text-gray-600 mt-1">
                    {item.persen}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
