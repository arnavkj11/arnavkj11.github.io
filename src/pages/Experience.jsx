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
                    Engineered and implemented scalable and fault-tolerant
                    access control mechanisms leveraging JWT authentication,
                    RBAC, and OAuth 2.0, ensuring robust user identity
                    management across distributed cloud platforms.
                  </li>
                  <li>
                    Collaborated with a cross-functional team using Agile/Scrum
                    methodology to integrate unit and integration testing,
                    achieving 92% test coverage and reducing production bugs by
                    30%.
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
                    💻 Software Developer Intern
                  </h3>
                  <span className="text-yellow-300 font-semibold">
                    May 2022 – August 2022
                  </span>
                </div>
                <p className="text-xl text-yellow-300 mb-4">
                  Cloud Optix Pvt. Ltd., India
                </p>
                <ul className="list-disc list-inside text-gray-100 space-y-2 text-lg">
                  <li>
                    Developed and integrated a time-series data ingestion
                    pipeline using InfluxDB, Telegraf, and Python, improving
                    IoT/system data retrieval speed by 50% and enabling
                    real-time analytics for thousands of sensor inputs.
                  </li>
                  <li>
                    Contributed to the design and deployment of a scalable
                    backend prototype for a core analytics product, enhancing
                    data persistence, monitoring, and visualization capabilities
                    across edge devices.
                  </li>
                  <li>
                    Implemented RESTful APIs to streamline data flow between
                    embedded systems and cloud storage, resulting in a more
                    modular and robust data infrastructure.
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
                    Improved maintenance operations across a network of 3
                    million machines by designing a multi-label classification
                    model using Scikit-Learn, Pandas, and XGBoost, achieving 92%
                    accuracy in categorizing machine health and failure
                    frequency.
                  </li>
                  <li>
                    Automated ticket resolution pipelines using CRM feature
                    extraction, cutting issue resolution time by 70% and
                    enhancing team efficiency.
                  </li>
                  <li>
                    Enhanced customer satisfaction by proactively flagging
                    failing assets, enabling predictive maintenance and reducing
                    downtime across national infrastructure systems.
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
