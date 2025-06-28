import React from "react";

function Projects() {
  return (
    <div className="relative min-h-screen font-inter overflow-x-hidden bg-gradient-to-br from-black to-gray-900">
      <main className="pt-20">
        {/* Projects Section */}
        <section id="projects" className="py-20 px-8 bg-gray-800 min-h-screen">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  📈 US Stock Market Analysis
                </h3>
                <p className="text-gray-100 mb-4">
                  Created a dashboard with Plotly, Dash, and Pandas to visualize
                  Dow Jones companies with real-time data analysis and
                  interactive charts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Plotly
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Dash
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Pandas
                  </span>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  🧠 Sentiment Analysis
                </h3>
                <p className="text-gray-100 mb-4">
                  Fine-tuned BERT model on 50K+ Yelp reviews, achieving ~83%
                  accuracy in sentiment classification with advanced NLP
                  techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    BERT
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    PyTorch
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    NLP
                  </span>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  🤖 AI Chatbot
                </h3>
                <p className="text-gray-100 mb-4">
                  Built a GPT-4-based intelligent chatbot with Flask backend and
                  Streamlit frontend for natural language interactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Flask
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Streamlit
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    GPT-4
                  </span>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  🔐 PAM System
                </h3>
                <p className="text-gray-100 mb-4">
                  Developed a Privileged Access Management system for Snowflake
                  with JWT authentication, RBAC, and OAuth 2.0 integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Golang
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    JWT
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    OAuth2
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Snowflake
                  </span>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  🎯 Multi-label Classification
                </h3>
                <p className="text-gray-100 mb-4">
                  Built predictive analytics model using Scikit-Learn and
                  XGBoost for automated ticket resolution with 70% efficiency
                  improvement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
                    ML
                  </span>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  📊 Time-Series Pipeline
                </h3>
                <p className="text-gray-100 mb-4">
                  Designed and implemented scalable time-series data ingestion
                  pipelines for real-time analytics and monitoring systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Apache Kafka
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    InfluxDB
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
