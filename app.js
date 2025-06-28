import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Main App component - this is where all your sections will live
function App() {
  return (
    <div className="relative min-h-screen font-inter overflow-x-hidden">
      {/* Diagonal split background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <svg
          width="100vw"
          height="100vh"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          className="w-full h-full absolute"
        >
          <defs>
            <linearGradient id="bg-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#111" />
              <stop offset="100%" stopColor="#f5f5f5" />
            </linearGradient>
          </defs>
          <polygon points="0,0 1920,0 0,1080" fill="#111" />
          <polygon points="1920,0 1920,1080 0,1080" fill="#f5f5f5" />
        </svg>
        {/* Left cherry blossom branch (dark side) */}
        <img
          src="https://raw.githubusercontent.com/arnavkj11/portfolio-assets/main/cherry-left.svg"
          alt="cherry blossom left"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "50vw",
            height: "auto",
            opacity: 0.85,
          }}
        />
        {/* Right cherry blossom branch (light side) */}
        <img
          src="https://raw.githubusercontent.com/arnavkj11/portfolio-assets/main/cherry-right.svg"
          alt="cherry blossom right"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "55vw",
            height: "auto",
            opacity: 0.85,
          }}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="p-6 bg-gray-800 shadow-lg fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          >
            Arnav Kumar Jain
          </a>
          <div className="space-x-8 hidden md:flex">
            {" "}
            {/* Hide on small screens, show on medium and up */}
            <a
              href="#about"
              className="text-lg hover:text-indigo-300 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-lg hover:text-indigo-300 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-lg hover:text-indigo-300 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-lg hover:text-indigo-300 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-indigo-300 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          {/* Mobile menu button (optional: add functionality for dropdown) */}
          <button className="md:hidden text-indigo-400 text-3xl focus:outline-none">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section with Japanese theme */}
        <section
          id="hero"
          className="relative flex flex-col items-center justify-center h-screen text-center select-none"
        >
          <div className="z-10 space-y-6">
            <h1
              className="text-7xl md:text-9xl font-extrabold tracking-widest text-white drop-shadow-lg"
              style={{ letterSpacing: "0.5em" }}
            >
              D E A T H
            </h1>
            <div className="flex justify-center items-center space-x-6">
              <span className="text-4xl md:text-5xl text-white tracking-widest">
                死
              </span>
              <span className="text-4xl md:text-5xl text-white tracking-widest">
                生
              </span>
              <span className="text-4xl md:text-5xl text-white tracking-widest">
                活
              </span>
            </div>
            <h1
              className="text-7xl md:text-9xl font-extrabold tracking-widest text-black drop-shadow-lg"
              style={{ letterSpacing: "0.5em" }}
            >
              L I F E
            </h1>
            <p className="mt-8 text-2xl md:text-3xl text-gray-700 font-light max-w-2xl mx-auto bg-white/60 rounded-xl px-6 py-4 shadow-lg backdrop-blur-sm">
              Arnav Kumar Jain — Portfolio
              <br />
              Software Engineer & Data Scientist
            </p>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-20 px-8 bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-extrabold text-center mb-12 text-indigo-400">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="https://placehold.co/300x300/6a0dad/ffffff?text=Arnav+Jain+Photo"
                  alt="Arnav Kumar Jain Photo"
                  className="rounded-full shadow-xl border-4 border-indigo-500 animate-fade-in"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
              <div className="md:w-2/3 text-lg text-gray-300 space-y-6 leading-relaxed">
                <p>
                  Hello! I'm Arnav Kumar Jain, a passionate professional with a
                  strong background in both **software engineering** and **data
                  science**. I hold a Master of Science in Computer Science from
                  Texas A&M University and a Bachelor of Technology in Computer
                  Engineering from NMIMS University.
                </p>
                <p>
                  My experience includes developing and deploying a Privileged
                  Access Management (PAM) system, designing multi-label
                  classification models for predictive analytics, and building
                  time-series data ingestion pipelines. I thrive on solving
                  complex problems, whether it's crafting scalable code or
                  extracting insights from large datasets.
                </p>
                <p>
                  I'm proficient in a wide range of technologies including
                  Python, JavaScript, React, TensorFlow, PyTorch, AWS, Docker,
                  and various databases. I'm always eager to collaborate on
                  exciting projects and contribute to impactful innovations.
                  Let's connect and build something amazing!
                </p>
                <div className="text-md text-gray-400">
                  <p>
                    <strong>Education:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Master of Science in Computer Science, Texas A&M
                      University, College Station, TX (Aug 2023 - May 2025) -
                      GPA: 3.5/4
                    </li>
                    <li>
                      Bachelor of Technology in Computer Engineering, NMIMS
                      University, Mumbai, India (July 2019 - May 2023)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-20 px-8 bg-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-5xl font-extrabold text-center mb-12 text-purple-400">
              My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Software Engineering Skills */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 hover:shadow-2xl hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-purple-300 mb-6 flex items-center">
                  <span className="mr-3 text-4xl">💻</span> Software Engineering
                </h3>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✔</span> Languages:
                    Python, Go, R, Java, C/C++, SQL, HTML/CSS, JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✔</span> Frameworks &
                    Libraries: Flask, Django, Spring Boot
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✔</span> Databases:
                    MySQL, SQLite, MongoDB, PostgreSQL, InfluxDB, Redis
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✔</span> Cloud &
                    DevOps: AWS, Docker, Kubernetes, CI/CD
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✔</span> Tools:
                    Jupyter Notebook, Google Colab, VS Code, Git
                  </li>
                </ul>
              </div>

              {/* Data Science Skills */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 hover:shadow-2xl hover:border-indigo-600 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-indigo-300 mb-6 flex items-center">
                  <span className="mr-3 text-4xl">📊</span> Data Science
                </h3>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li className="flex items-center">
                    <span className="text-indigo-400 mr-3">✔</span> Libraries:
                    Sci-Kit Learn, PyTorch, Keras, TensorFlow, Pandas, NumPy,
                    Matplotlib
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-400 mr-3">✔</span> Databases:
                    Pinecone
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-400 mr-3">✔</span> Tools &
                    Platform: Tableau, SAS Visual Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-400 mr-3">✔</span> Coursework:
                    Machine Learning, Data Visualization, Deep Learning, Data
                    Mining, Natural Language Processing
                  </li>
                </ul>
              </div>

              {/* Other Relevant Skills */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 hover:shadow-2xl hover:border-green-600 transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                <h3 className="text-3xl font-bold text-green-300 mb-6 flex items-center">
                  <span className="mr-3 text-4xl">🌟</span> Other Skills &
                  Certifications
                </h3>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✔</span> Software
                    Engineering, Artificial Intelligence, Distributed Systems
                    and Cloud Computing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✔</span> Algorithm,
                    Network Security
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✔</span> AWS Certified
                    Cloud Practitioner
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✔</span> AWS Certified
                    AI Practitioner (Early Adopter)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✔</span> Machine
                    Learning Specialization (Coursera)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-20 px-8 bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-extrabold text-center mb-12 text-indigo-400">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Project Card 1: US Stock Market Analysis: Dow Jones Index */}
              <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl hover:border-indigo-600 transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src="https://placehold.co/600x400/3e2765/ffffff?text=Stock+Market+Analysis"
                  alt="US Stock Market Analysis"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-indigo-300 mb-3">
                    US Stock Market Analysis: Dow Jones Index
                  </h3>
                  <p className="text-gray-400 text-base mb-4">
                    Built an interactive financial data visualization dashboard
                    using Plotly, Dash, and Pandas to analyze and visualize 30+
                    companies in the Dow Jones Industrial Average, helping users
                    identify market trends and investment opportunities.
                    Enhanced user experience with dropdown filters, tooltips,
                    and time-range sliders.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Plotly
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Dash
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Pandas
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      NumPy
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Matplotlib
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1">🔗</span> Live Demo (Placeholder)
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1">💻</span> GitHub (Placeholder)
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 2: Sentiment Analysis: Yelp Reviews */}
              <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src="https://placehold.co/600x400/4c2a82/ffffff?text=Sentiment+Analysis"
                  alt="Sentiment Analysis"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    Sentiment Analysis: Yelp Reviews
                  </h3>
                  <p className="text-gray-400 text-base mb-4">
                    Achieved 83.3% validation and 83.1% test accuracy by
                    fine-tuning a BERT-based transformer model using Hugging
                    Face Transformers on 50,000+ Yelp reviews. Engineered a
                    complete NLP preprocessing pipeline and customized the model
                    architecture for improved classification performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      BERT
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Hugging Face Transformers
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      PyTorch
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Sklearn
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      TensorFlow
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1">🔗</span> Live Demo (Placeholder)
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1">💻</span> GitHub (Placeholder)
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 3: Chatbot: Texas A&M Aggies 2024 Football Season */}
              <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl hover:border-green-600 transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src="https://placehold.co/600x400/2a824c/ffffff?text=Chatbot"
                  alt="Football Chatbot"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-300 mb-3">
                    Chatbot: Texas A&M Aggies 2024 Football Season
                  </h3>
                  <p className="text-gray-400 text-base mb-4">
                    Developed a chatbot using OpenAI GPT-4 API to answer
                    football season queries, improving fan engagement with
                    contextual responses. Integrated Pinecone vector DB for
                    semantic embedding retrieval. Optimized prompts and deployed
                    with Flask, Python, and Streamlit.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      OpenAI GPT-4 API
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Pinecone
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Flask
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Python
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                      Streamlit
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1">🔗</span> Live Demo (Placeholder)
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1">💻</span> GitHub (Placeholder)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="py-20 px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-extrabold text-center mb-12 text-purple-400">
              Experience
            </h2>
            <div className="relative border-l-4 border-gray-700 pl-8">
              {/* Experience Item 1: Software Developer Intern, Procyon Inc. */}
              <div className="mb-12 last:mb-0">
                <div
                  className="absolute w-6 h-6 bg-indigo-600 rounded-full -left-3 border-4 border-gray-900 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <h3 className="text-3xl font-bold text-indigo-300 mb-2">
                  Software Developer Intern
                </h3>
                <p className="text-xl text-gray-400 mb-2">
                  Procyon Inc., USA | May 2024 - Aug 2024
                </p>
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                  <li>
                    Boosted client base by 100% by developing and deploying a
                    Privileged Access Management (PAM) system tailored for
                    Snowflake environments using Golang.
                  </li>
                  <li>
                    Engineered and implemented scalable and fault-tolerant
                    access control mechanisms leveraging JWT authentication,
                    RBAC, and OAuth 2.0.
                  </li>
                  <li>
                    Collaborated with a cross-functional team using Agile/Scrum
                    methodology to integrate unit and integration testing,
                    achieving 92% test coverage and reducing production bugs by
                    30%.
                  </li>
                </ul>
              </div>

              {/* Experience Item 2: Machine learning Intern, Lipi Data Systems */}
              <div className="mb-12 last:mb-0">
                <div
                  className="absolute w-6 h-6 bg-purple-600 rounded-full -left-3 border-4 border-gray-900 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <h3 className="text-3xl font-bold text-purple-300 mb-2">
                  Machine Learning Intern
                </h3>
                <p className="text-xl text-gray-400 mb-2">
                  Lipi Data Systems, India | Dec 2021 - Mar 2022
                </p>
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                  <li>
                    Improved maintenance operations across a network of 3
                    million machines by designing a multi-label classification
                    model using Scikit-Learn, Pandas, and XGBoost, achieving 92%
                    accuracy.
                  </li>
                  <li>
                    Automated ticket resolution pipelines using CRM feature
                    extraction, cutting issue resolution time by 70%.
                  </li>
                  <li>
                    Enhanced customer satisfaction by proactively flagging
                    failing assets, enabling predictive maintenance and reducing
                    downtime.
                  </li>
                </ul>
              </div>

              {/* Experience Item 3: Software Developer Intern, Cloud Optix Pvt. Ltd. */}
              <div className="mb-12 last:mb-0">
                <div
                  className="absolute w-6 h-6 bg-green-600 rounded-full -left-3 border-4 border-gray-900 animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <h3 className="text-3xl font-bold text-green-300 mb-2">
                  Software Developer Intern
                </h3>
                <p className="text-xl text-gray-400 mb-2">
                  Cloud Optix Pvt. Ltd., India | May 2022 - Aug 2022
                </p>
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                  <li>
                    Developed and integrated a time-series data ingestion
                    pipeline using InfluxDB, Telegraf, and Python, improving
                    IoT/system data retrieval speed by 50%.
                  </li>
                  <li>
                    Contributed to the design and deployment of a scalable
                    backend prototype for a core analytics product, enhancing
                    data persistence, monitoring, and visualization
                    capabilities.
                  </li>
                  <li>
                    Implemented RESTful APIs to streamline data flow between
                    embedded systems and cloud storage, resulting in a more
                    modular and robust data infrastructure.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 bg-gray-800">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-extrabold mb-12 text-indigo-400">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Have a question, a project idea, or just want to say hello? Feel
              free to reach out!
            </p>

            <form className="max-w-xl mx-auto space-y-6 bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-700 text-gray-200 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-700 text-gray-200 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-4 bg-gray-700 text-gray-200 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-200 resize-y"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/arnav-kumar-jain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {/* LinkedIn Icon Placeholder - In a real app, you'd use a proper icon library like Lucide React */}
                <img
                  src="https://placehold.co/40x40/0A66C2/ffffff?text=LI"
                  alt="LinkedIn"
                  className="w-10 h-10 rounded-full"
                />
              </a>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {/* GitHub Icon Placeholder */}
                <img
                  src="https://placehold.co/40x40/181717/ffffff?text=GH"
                  alt="GitHub"
                  className="w-10 h-10 rounded-full"
                />
              </a>
              <a
                href="mailto:arnavkumar.jain1108@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {/* Email Icon Placeholder */}
                <img
                  src="https://placehold.co/40x40/D44638/ffffff?text=✉️"
                  alt="Email"
                  className="w-10 h-10 rounded-full"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center text-gray-500 text-sm border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Arnav Kumar Jain. All rights
          reserved.
        </p>
        <p className="mt-2">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

// Ensure the root is created correctly for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
