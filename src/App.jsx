import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const compareModels = async () => {
    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/api/compare`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please check the backend.");
    } finally {
      setLoading(false);
    }
  };

  const getFasterModel = () => {
    if (!result) return "";

    return result.geminiTime < result.groqTime
      ? "Gemini"
      : "Groq";
  };

  return (
    <div className="app">
      <h1>🤖 LLM Comparison</h1>

      <p className="subtitle">
        Compare responses from Gemini and Groq
      </p>

      <div className="input-section">
        <textarea
          rows="5"
          placeholder="Ask something..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={compareModels} disabled={loading}>
          {loading ? "Comparing..." : "Compare Models"}
        </button>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>

          <h3>Comparing Gemini and Groq...</h3>

          <p>
            Please wait while both AI models generate their responses.
          </p>
        </div>
      )}

      {!loading && result && (
        <div className="results">
          <div className="question-box">
            <strong>Question:</strong>

            <p>{result.question}</p>
          </div>

          <div className="winner">
            🏆 Faster Model:{" "}
            <strong>{getFasterModel()}</strong>
          </div>

          <div className="model-container">
            {/* Gemini */}
            <div className="model-card">
              <div className="model-header">
                <h2>🟢 Gemini</h2>

                <span className="time">
                  ⏱ {result.geminiTime} ms
                </span>
              </div>

              <div className="response">
                {result.geminiResponse}
              </div>
            </div>

            {/* Groq */}
            <div className="model-card">
              <div className="model-header">
                <h2>🔵 Groq</h2>

                <span className="time">
                  ⏱ {result.groqTime} ms
                </span>
              </div>

              <div className="response">
                {result.groqResponse}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        Developed by <strong>P Ganesh</strong>
      </footer>
    </div>
  );
}

export default App;