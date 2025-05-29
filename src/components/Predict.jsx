import React, { useState } from "react";

function Predict() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8000/api/predict", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.prediction);
    console.log(data.prediction);
  };

  return (
    <div>
      <h2>Upload a video to get transcription</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Predict</button>
      <h3>Prediction:</h3>
      <p>{result}</p>
    </div>
  );
}

export default Predict;
