import { Link } from "react-router-dom";
import aData from "./aData.json";

export default function ProjectPage() {
  const projects = aData.projects;

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
        id="project"
        className="px-6 md:px-[70px] py-12 *:font-['Alekan']"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-black mb-12">
          MY <br /> PROJECT
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.judul}
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-blue-900">
                {project.judul}
              </h2>
              <p className="text-gray-700 text-base font-bold">{project.deskripsi}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-[#E1D9C7] text-center text-sm md:text-base py-6 font-['AlekanBold']">
        <p>© 2025 Wildan. All rights reserved.</p>
      </footer>
    </div>
  );
}
