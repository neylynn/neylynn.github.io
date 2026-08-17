import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaDownload } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition"
        >
          neylynn
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/neylynn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col p-6 gap-5">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-blue-400"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <hr className="border-slate-700" />

            <a
              href="https://github.com/neylynn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 text-blue-400"
            >
              <FaDownload />
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;