import React, { useEffect, useState } from "react";
import controllerIcon from "./images/controllerIcon.png";
import Cookies from "js-cookie"; // Import 'js-cookie'

// ...

function getCookie(name) {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

const UserView = ({ handleViewChange }) => {
  const [user, setUser] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const userId = Cookies.get("userId"); // Use Cookies.get to retrieve a cookie
    console.log("User ID from cookie:", userId);

    if (userId) {
      // Fetch user data based on the user ID
      fetch(`http://localhost:8081/getUser/${userId}`, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.username) {
            // Update the user state with the fetched user data
            setUser(data);
            console.log("Fetched user data:", data);
          } else {
            console.error("Error fetching user information:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    }
  }, []); // No need to include dependencies for Cookies

  const updateUsername = async () => {
    const userId = Cookies.get("userId"); // Retrieve the user ID from the cookie
    if (!userId) {
      console.error("User ID not found in cookies");
      setUpdateSuccess(false); // Ensure success message is not shown on failure
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/updateUsername/${userId}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: newUsername }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setUser(data); // Update the user state with the new username
        setUpdateSuccess(true); // Set the success state to true
        console.log("Username updated successfully:", data);
      } else {
        setUpdateSuccess(false); // Set the success state to false on failure
        console.error("Failed to update username:", data);
      }
    } catch (error) {
      setUpdateSuccess(false); // Set the success state to false on error
      console.error("Error updating username:", error);
    }
  };

  const deleteUser = async () => {
    const userId = Cookies.get("userId");
    if (!userId) {
      console.error("User ID not found in cookies");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8081/deleteUser/${userId}`, {
        method: "DELETE",
        credentials: "include"
      });

      if (response.ok) {
        console.log("User deleted successfully");
        // Redirect to loginView after successful deletion
      handleViewChange("loginView");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <div className="header">
        <div className="collapse text-bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4>About</h4>
                <p className="text-gray">
                  This is a project created by Logan Pfantz and Jesus Soto for
                  Iowa State University className COMS 319 Fall 2023.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      lwpfantz@iastate.edu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      jhsoto@iastate.edu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src={controllerIcon} alt="Controller Icon" width="40px" />
              <div className="header-style">
                <strong>
                  <span style={{ color: "yellow" }}>Game</span>
                  <span style={{ color: "red" }}>Space</span>
                </strong>
              </div>
            </a>

            <button
              type="button"
              className="btn btn-lg btn-white-text"
              onClick={() => handleViewChange("homeView")}
            >
              Home
            </button>
            <button
              type="button"
              className="btn btn-lg btn-white-text"
              onClick={() => handleViewChange("gamingLibrary")}
            >
              Gaming Library
            </button>
            <button
              type="button"
              className="btn btn-lg btn-white-text2"
              onClick={() => handleViewChange("consolesCatalogue")}
            >
              Consoles Catalogue
            </button>
            <button
              type="button"
              className="btn btn-lg btn-white-text2"
              onClick={() => handleViewChange("indexView")}
            >
              About Us
            </button>
            <button
              type="button"
              className="btn btn-lg btn-white-text2"
              onClick={() => handleViewChange("userView")}
            >
              Account
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="subHeader">
        <div className="welcome-banner">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 id="title">
                <strong>
                  <span style={{ color: "yellow" }}>Game</span>
                  <span style={{ color: "red" }}>Space</span>
                </strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center">User Information</h2>
      <div className="container mt-4">
        {/* Display User Information */}
        {user ? (
          <div className="card p-3 mb-3">
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <button className="btn btn-danger" onClick={deleteUser}>
              Delete Account
            </button>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
        {/* Input Field for Updating Username */}
        <div className="card p-3">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="New Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <button className="btn btn-secondary" onClick={updateUsername}>
            Update Username
          </button>
          {updateSuccess && (
            <div className="alert alert-success mt-3">
              Username has been updated, the new username will be displayed when
              you return to this view.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserView;
