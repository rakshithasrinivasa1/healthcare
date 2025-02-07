import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import VolunteerLoginImage from "../images/VolunteerLogin-image.png"; // Replace with the actual image path
import "./VolunteerLogin.css";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("User");

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Toggle Buttons */}
        <div className="toggle-container">
          <button
            className={`toggle-btn ${selectedRole === "User" ? "active" : ""}`}
            onClick={() => setSelectedRole("User")}
          >
            User
          </button>
          <button
            className={`toggle-btn ${selectedRole === "Volunteer" ? "active" : ""}`}
            onClick={() => setSelectedRole("Volunteer")}
          >
            Volunteer
          </button>
        </div>

        {/* Image */}
        <div className="image-container">
          <img src={VolunteerLoginImage } alt="Login Illustration" className="login-image" />
        </div>

        {/* Login Form */}
        <h2 className="text-center"> Volunteer Login Page</h2>
        <div className="form-container">
          <input type="email" placeholder="User Email" className="form-control mb-3" />
          <input type="password" placeholder="User Password" className="form-control mb-3" />

          <div className="options-container">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button className="btn btn-primary w-100">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
