import React from "react";
import arnavImage from "../image/Arnav_Jain.jpg";

function Home() {
  return (
    <div className="relative min-h-screen font-inter overflow-x-hidden bg-gradient-to-br from-black to-gray-900">
      <main className="pt-8">
        {/* Main Content Section */}
        <section className="min-h-screen flex items-center justify-center py-6 px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch justify-center">
              {/* Left Side - Photo Section */}
              <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-8">
                <div className="bg-gray-900/80 border border-yellow-500 rounded-xl p-8 shadow-lg shadow-yellow-500/20 w-full h-full flex flex-col justify-center items-center min-h-[500px]">
                  {/* Profile Photo */}
                  <div className="relative mb-8">
                    <div className="w-64 h-80 bg-gray-800 border-2 border-yellow-500 rounded-xl shadow-lg shadow-yellow-500/20 flex items-center justify-center hover:border-yellow-400 transition-all duration-300 overflow-hidden">
                      <img
                        src={arnavImage}
                        alt="Arnav Kumar Jain"
                        className="w-full h-full object-cover object-center rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex justify-center gap-3 w-full">
                    <a
                      href="https://www.linkedin.com/in/arnavkj11/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 border border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 text-yellow-400"
                      title="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>

                    <a
                      href="mailto:arnavkumar.jain1108@gmail.com"
                      className="w-12 h-12 bg-gray-800 border border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 text-yellow-400"
                      title="Email"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>

                    <a
                      href="https://github.com/arnavkj11/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 border border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 text-yellow-400"
                      title="GitHub"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/arnavkj11/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 border border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 text-yellow-400"
                      title="Instagram"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    <a
                      href="https://medium.com/@arnavkj11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 border border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 text-yellow-400"
                      title="Medium"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - About Me Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-gray-900/80 border border-yellow-500 rounded-xl p-8 shadow-lg shadow-yellow-500/20 h-full min-h-[500px] flex flex-col justify-center">
                  <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                    About Me
                  </h2>

                  <div className="text-lg text-gray-100 space-y-6 leading-relaxed">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-yellow-400">
                        👋 Hello! I'm Arnav Kumar Jain
                      </h3>
                      <p>
                        A passionate professional with a strong background in
                        both
                        <span className="text-yellow-400 font-semibold">
                          {" "}
                          software engineering
                        </span>{" "}
                        and
                        <span className="text-yellow-400 font-semibold">
                          {" "}
                          data science
                        </span>
                        . I bring hands-on experience in developing scalable
                        backend systems, designing intelligent machine learning
                        models, and building interactive data-driven
                        applications. I recently graduated with Master's in
                        Computer Science at Texas A&M University, I've
                        previously delivered impactful solutions in domains like
                        cloud security, predictive maintenance, financial
                        analytics, and natural language processing through
                        industry internships and academic projects.
                      </p>
                      <p>
                        With a versatile tech stack that spans Python, Golang,
                        SQL, and modern ML frameworks like PyTorch and
                        TensorFlow, I enjoy solving real-world problems where
                        data meets engineering. I thrive at the intersection of
                        innovation, usability, and performance. I'm always eager
                        to collaborate on meaningful projects, especially those
                        that combine technology, analytics, and creativity to
                        make a measurable impact.
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-gray-300 italic">
                        "Passionate about creating innovative solutions that
                        bridge the gap between technology and real-world
                        applications."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
