
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    fetch("http://localhost:8091/user/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        setusername("");
        setpassword("");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("username",data.username)
        
        console.log(localStorage.getItem("username"))

        


        
        
       
        if (data.role === "faculty") {
          navigate("/faculty-dashboard");
        } else {
          navigate("/admin-dashboard");
        }
      })
      .catch((error) => {
        console.log("request failed to reach the server");
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      
      <form 
        onSubmit={submitForm} 
        className="bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-4"
      >
        
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

      </form>
    </div>
  );
}