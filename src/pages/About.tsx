import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center">
        
        <h1 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
          About This App
        </h1>

        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          This application is powered by Tauri, Vite, React, and styled with Tailwind CSS. It functions as a multi-page SPA without refreshing the native window.
        </p>

        {/* Navigation Link back to Home */}
        <Link 
          to="/" 
          className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
