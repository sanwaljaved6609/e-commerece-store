import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import swal from "sweetalert";
import "./auth.css";

const RegisterForm = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      swal("Error", "Passwords do not match!", "error");
      return;
    }

    try {
      await register(email, password);
      swal("Success", "You have registered successfully!", "success");
    } catch (error) {
      swal("Registration Failed", error.message, "error");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          className="input-group"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="auth-button" type="submit">
          Register
        </button>
        <p className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
