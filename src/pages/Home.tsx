import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Link } from "react-router-dom";

export default function Home() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center">
        
        <h1 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          Home Page (Tauri + React)
        </h1>

        <p className="text-gray-400 text-xs mb-6">
          This is your primary dashboard view.
        </p>

        {/* Greet Form */}
        <form
          className="flex gap-2 w-full mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Greet
          </button>
        </form>

        {greetMsg && (
          <p className="text-teal-400 font-medium text-sm mt-2 mb-4">{greetMsg}</p>
        )}

        {/* Navigation Link to About Page */}
        <Link 
          to="/about" 
          className="text-sm text-blue-400 hover:underline mt-4"
        >
          Go to About Page &rarr;
        </Link>
      </div>
    </div>
  );
}
