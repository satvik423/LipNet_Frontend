import { ArrowRight, Brain, CheckCircle, Zap } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">
              AI-Powered Lip Reading
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              LipNet
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary end-to-end sentence-level lipreading system powered by
            deep learning. Transform silent videos into accurate transcriptions
            with cutting-edge AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/predict")}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Predicting</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-full hover:bg-purple-500/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: Brain,
              title: "Deep Learning",
              description:
                "Advanced neural networks with spatiotemporal convolution layers and Bi-GRU architecture",
            },
            {
              icon: Zap,
              title: "Real-time Processing",
              description:
                "Lightning-fast video analysis and transcription with optimized CTC decoding",
            },
            {
              icon: CheckCircle,
              title: "High Accuracy",
              description:
                "Trained on 28,000+ video samples from the GRID corpus for maximum precision",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 hover:border-purple-500/30 group"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
