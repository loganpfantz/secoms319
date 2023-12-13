import React, { useState } from "react";
import Cookies from 'js-cookie';

const RegistrationForm = ({ onRegistration, onGoToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

// Handle registration
const handleRegistration = async () => {
    try {
      // Basic validation
      if (!username || !password) {
        setError("Username and password are required");
        return;
      }
  
      const response = await fetch("http://localhost:8081/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("User registered successfully");
        // Display a success message
        setError(`User registered successfully. Your custom ID is: ${data.userId}`);
        // After successful registration, go to the login page
        onGoToLogin();
      } else {
        console.error("Error during registration:", data.error);
        // Handle registration error, e.g., display an error message to the user
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card text-center p-3">
        <h2 className="mb-4">Registration</h2>
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
            onClick={handleRegistration}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={onGoToLogin}
          >
            Already have an account? Login
          </button>
          {error && <p className="text-success">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
