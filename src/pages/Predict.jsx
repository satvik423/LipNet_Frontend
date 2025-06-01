import {
  ArrowRight,
  Brain,
  CheckCircle,
  FileVideo,
  Mic,
  Upload,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

function Predict() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      setResult("Error processing video. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-6 pt-5">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Video Analysis
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Upload your video file to get AI-powered lip reading transcription
          </p>
        </div>

        <div className="bg-gray-800/40 border border-gray-700/50 rounded-3xl p-8">
          {/* File Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
              dragActive
                ? "border-green-400 bg-green-400/10"
                : file
                ? "border-green-500 bg-green-500/5"
                : "border-gray-600 hover:border-gray-500"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="space-y-6">
              <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                  file ? "bg-green-500" : "bg-gray-700"
                }`}
              >
                {file ? (
                  <CheckCircle className="w-10 h-10 text-white" />
                ) : (
                  <Upload className="w-10 h-10 text-gray-400" />
                )}
              </div>

              {file ? (
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">
                    File Selected
                  </h3>
                  <p className="text-gray-300">{file.name}</p>
                  <p className="text-gray-500 text-sm">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Drop your video here
                  </h3>
                  <p className="text-gray-400 mb-6">or click to browse files</p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Choose File
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Predict Button */}
          {file && (
            <div className="mt-8 text-center">
              <button
                onClick={handleUpload}
                disabled={isLoading}
                className="px-12 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-3 mx-auto"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    <span>Analyze Video</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="mt-9 bg-gray-900/50 border border-gray-600/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mic className="w-6 h-6 mr-3 text-green-400" />
                Transcription Result
              </h3>
              <div className="bg-black/30 border border-gray-700/50 rounded-xl p-6">
                <p className="text-lg text-gray-100 leading-relaxed font-mono">
                  "{result}"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Predict;
