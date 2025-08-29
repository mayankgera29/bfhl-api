import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // 👇 Smart API base: Dev vs Prod
  const API_BASE = import.meta.env.DEV
    ? "https://bfhl-api-exqo.onrender.com" // Dev mode (localhost:5173)
    : ""; // Prod mode (same host as backend)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE}/bfhl`,
        { data: input.split(",").map((i) => i.trim()) },
        { headers: { "Content-Type": "application/json" } } // ✅ added headers
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        🚀 BFHL Full Stack Project
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter values e.g. a,1,4,$,R"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 rounded-lg p-2 w-80"
          required
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>

      {result && (
        <div className="bg-white shadow-lg rounded-lg p-4 w-[500px]">
          <h2 className="text-xl font-bold mb-2 text-green-600">Result ✅</h2>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
