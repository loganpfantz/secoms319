import React, { useState } from "react";
import Cookies from 'js-cookie'; // Import 'js-cookie'

const LoginForm = ({ onLogin, onRegistrationClick, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      // Check if username and password are provided
      if (!username || !password) {
        return { status: 400, error: 'Username and password are required' };
      }
  
      // Make the request to the backend login endpoint
      const response = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      // Parse the JSON response
      const data = await response.json();
  
      // Check if the login was successful (status 200)
      if (response.status === 200) {
        // Additional check for successful login
        if (data && data.message === 'Login successful') {
          // Set the user ID as a cookie here
          Cookies.set('userId', data.user.id, { /* cookie options */ });
  
          // Notify the parent component
          onLoginSuccess();
        } else {
          console.error("Error during login:", "Unexpected response format");
          setError("Internal Server Error");
        }
      } else {
        console.error("Error during login:", data.error);
        // Handle login error, e.g., display an error message to the user
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle login error, e.g., display an error message to the user
      setError("Internal Server Error");
    }
  };
  

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card text-center p-3">
        <h2 className="mb-4">Login</h2>
        <h1 className="mb-4" style={{ backgroundColor: "black", padding: "0.5rem" }}>
          <span style={{ color: "red" }}>Game</span>
          <span style={{ color: "orange" }}>Space</span>
        </h1>
        <form className="d-flex flex-column align-items-center">
          <div className="mb-3 w-75">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3 w-75">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger w-75 mb-3"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={onRegistrationClick}
          >
            New to GameSpace? Register!
          </button>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
