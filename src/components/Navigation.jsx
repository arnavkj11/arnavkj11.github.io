import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="p-6 bg-black border-b border-yellow-500 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-colors duration-300"
        >
          Arnav Kumar Jain
        </Link>
        <div className="space-x-8 hidden md:flex">
          <Link
            to="/"
            className={`text-lg transition-colors duration-300 ${
              isActive("/")
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Home
          </Link>
          <Link
            to="/skills"
            className={`text-lg transition-colors duration-300 ${
              isActive("/skills")
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`text-lg transition-colors duration-300 ${
              isActive("/projects")
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className={`text-lg transition-colors duration-300 ${
              isActive("/experience")
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className={`text-lg transition-colors duration-300 ${
              isActive("/contact")
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden mt-4 space-y-4">
        <Link
          to="/"
          className={`block text-lg transition-colors duration-300 ${
            isActive("/")
              ? "text-yellow-400 font-semibold"
              : "text-white hover:text-yellow-400"
          }`}
        >
          Home
        </Link>
        <Link
          to="/skills"
          className={`block text-lg transition-colors duration-300 ${
            isActive("/skills")
              ? "text-yellow-400 font-semibold"
              : "text-white hover:text-yellow-400"
          }`}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={`block text-lg transition-colors duration-300 ${
            isActive("/projects")
              ? "text-yellow-400 font-semibold"
              : "text-white hover:text-yellow-400"
          }`}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          className={`block text-lg transition-colors duration-300 ${
            isActive("/experience")
              ? "text-yellow-400 font-semibold"
              : "text-white hover:text-yellow-400"
          }`}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          className={`block text-lg transition-colors duration-300 ${
            isActive("/contact")
              ? "text-yellow-400 font-semibold"
              : "text-white hover:text-yellow-400"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
