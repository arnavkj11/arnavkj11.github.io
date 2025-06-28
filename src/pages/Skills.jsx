import React from "react";

function Skills() {
  return (
    <div className="relative min-h-screen font-inter overflow-x-hidden bg-gradient-to-br from-black to-gray-900">
      <main className="pt-20">
        {/* Skills Section */}
        <section id="skills" className="py-20 px-8 bg-black min-h-screen">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  📊 Languages
                </h3>
                <p className="text-lg text-gray-100">
                  Python, Go, R, Java, C/C++, SQL, HTML/CSS, JavaScript
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  💼 Frameworks & Libraries
                </h3>
                <p className="text-lg text-gray-100">
                  Flask, Django, Scikit-Learn, PyTorch, Keras, TensorFlow
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  🎯 Tools & Platforms
                </h3>
                <p className="text-lg text-gray-100">
                  Jupyter Notebook, Google Colab, AWS, Docker, Kubernetes
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  🌐 Web Technologies
                </h3>
                <p className="text-lg text-gray-100">
                  React, Node.js, Express, MongoDB, MySQL, PostgreSQL
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  ☁️ Cloud & DevOps
                </h3>
                <p className="text-lg text-gray-100">
                  AWS, Azure, Docker, Kubernetes, Jenkins, Git, Linux
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  🤖 Machine Learning
                </h3>
                <p className="text-lg text-gray-100">
                  Deep Learning, Neural Networks, NLP, Computer Vision, Data
                  Analysis
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Skills;
