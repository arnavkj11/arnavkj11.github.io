import React from "react";

function Experience() {
  return (
    <div className="relative min-h-screen font-inter overflow-x-hidden bg-gradient-to-br from-black to-gray-900">
      <main className="pt-20">
        {/* Experience Section */}
        <section id="experience" className="py-20 px-8 bg-black min-h-screen">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              Professional Experience
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-3xl font-bold text-yellow-400">
                    💻 Software Developer Intern
                  </h3>
                  <span className="text-yellow-300 font-semibold">
                    May 2024 – Aug 2024
                  </span>
                </div>
                <p className="text-xl text-yellow-300 mb-4">
                  Procyon Inc., USA
                </p>
                <ul className="list-disc list-inside text-gray-100 space-y-2 text-lg">
                  <li>
                    Developed a comprehensive Privileged Access Management (PAM)
                    system for Snowflake using Golang, ensuring secure database
                    access controls.
                  </li>
                  <li>
                    Implemented scalable access controls with JWT
                    authentication, Role-Based Access Control (RBAC), and OAuth
                    2.0 integration.
                  </li>
                  <li>
                    Designed and built RESTful APIs for user management, session
                    handling, and audit logging with 99.9% uptime.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to integrate
                    security features and optimize system performance.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Golang
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    JWT
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    OAuth 2.0
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Snowflake
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    RESTful APIs
                  </span>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-3xl font-bold text-yellow-400">
                    🔬 Machine Learning Intern
                  </h3>
                  <span className="text-yellow-300 font-semibold">
                    Dec 2021 – Mar 2022
                  </span>
                </div>
                <p className="text-xl text-yellow-300 mb-4">
                  Lipi Data Systems, India
                </p>
                <ul className="list-disc list-inside text-gray-100 space-y-2 text-lg">
                  <li>
                    Built and deployed a multi-label classification model using
                    Scikit-Learn and XGBoost for predictive ticket
                    categorization.
                  </li>
                  <li>
                    Automated ticket resolution pipelines, reducing average
                    resolution time by 70% and improving customer satisfaction
                    scores.
                  </li>
                  <li>
                    Performed comprehensive data analysis and feature
                    engineering on large datasets (100K+ records) to improve
                    model accuracy.
                  </li>
                  <li>
                    Implemented data preprocessing pipelines and model
                    evaluation frameworks using Python and pandas.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Scikit-Learn
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    XGBoost
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Pandas
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Data Analysis
                  </span>
                </div>
              </div>

              {/* Education Section */}
              <div className="mt-16">
                <h2 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-yellow-400">
                        🎓 Master's in Computer Science
                      </h3>
                      <span className="text-yellow-300 font-semibold">
                        2023 – 2025
                      </span>
                    </div>
                    <p className="text-lg text-gray-100">
                      Texas A&M University, USA
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-yellow-400">
                        🎓 Bachelor of Technology in Computer Engineering
                      </h3>
                      <span className="text-yellow-300 font-semibold">
                        2018 – 2022
                      </span>
                    </div>
                    <p className="text-lg text-gray-100">
                      NMIMS University, India
                    </p>
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

export default Experience;
