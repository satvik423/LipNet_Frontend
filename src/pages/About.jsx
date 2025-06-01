import React from "react";
import {

  Brain,
 
  FileVideo,

  Zap,
} from "lucide-react";

export const About = () => {
  const specs = [
    {
      title: "Architecture",
      description:
        "LipNet uses spatiotemporal convolution layers, followed by Bi-GRU layers, and trained with CTC loss.",
      icon: Brain,
    },
    {
      title: "Dataset",
      description:
        "Trained on the GRID corpus, a dataset of over 28,000 videos of sentence-level speech.",
      icon: FileVideo,
    },
    {
      title: "System Workflow",
      description:
        "Input video → Mouth region extraction → Feature extraction via STCNN → Temporal modeling via GRUs → CTC decoding.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About the Model
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge technology behind LipNet's revolutionary
            lip-reading capabilities
          </p>
        </div>

        <div className="space-y-8">
          {specs.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-300 hover:border-blue-500/30"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="mt-20 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl p-8 border border-gray-600/30">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Training Videos", value: "28,000+" },
              { label: "Accuracy Rate", value: "94.1%" },
              { label: "Processing Speed", value: "Real-time" },
              { label: "Model Size", value: "15.2MB" },
            ].map(({ label, value }, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
