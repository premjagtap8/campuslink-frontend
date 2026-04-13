

import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-3xl text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to Attendance System
        </h1>

        <p className="text-white mb-8">
          Manage Users, Subjects, and Attendance easily
        </p>

        <button
          onClick={() => navigate("login")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full text-lg transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}