import React from "react";

function About() {
  return (
    <div>
      <h2>About the Model</h2>
      <p>
        <strong>Architecture:</strong> LipNet uses spatiotemporal convolution
        layers, followed by Bi-GRU layers, and trained with CTC loss.
      </p>
      <p>
        <strong>Dataset:</strong> Trained on the GRID corpus, a dataset of over
        28,000 videos of sentence-level speech.
      </p>
      <p>
        <strong>System Workflow:</strong> Input video → Mouth region extraction
        → Feature extraction via STCNN → Temporal modeling via GRUs → CTC
        decoding.
      </p>
    </div>
  );
}

export default About;
