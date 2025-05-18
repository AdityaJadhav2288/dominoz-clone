import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../Pages/UserContext";
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setErrorMessage('');
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setErrorMessage('Both email and password are required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  async function submit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await axios.post("http://localhost:8000/login", formData);

      if (res.status === 200) {
        setUser(res.data.user);
        navigate("/");
      } else {
        setErrorMessage(res.data.message || 'Login failed.');
      }
    } catch (e) {
      setErrorMessage("Wrong details");
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="login-modern-bg" style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className="login-modern-card" style={{
        background: "#fff",
        borderRadius: "1.5rem",
        boxShadow: "0 4px 24px rgba(13,72,136,0.10)",
        padding: "2.5rem 2rem",
        width: "100%",
        maxWidth: "370px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{marginBottom: "1.5rem"}}>
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#0d4888" opacity="0.1"/>
            <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="#0d4888" strokeWidth="2" />
            <path d="M17 17c0-2.21-2.24-4-5-4s-5 1.79-5 4" stroke="#0d4888" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 style={{color: "#0d4888", fontWeight: 700, marginBottom: "1.2rem"}}>Login</h2>
        <form onSubmit={submit} style={{width: "100%"}}>
          <div className="input-group-modern" style={{marginBottom: "1.2rem"}}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "1rem",
                border: "1px solid #e0e7ff",
                fontSize: "1rem",
                marginBottom: "0.5rem",
                outline: "none"
              }}
              autoComplete="username"
            />
          </div>
          <div className="input-group-modern" style={{marginBottom: "1.2rem"}}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "1rem",
                border: "1px solid #e0e7ff",
                fontSize: "1rem",
                marginBottom: "0.5rem",
                outline: "none"
              }}
              autoComplete="current-password"
            />
          </div>
          <input
            type="submit"
            value={isSubmitting ? "Logging in..." : "Login"}
            disabled={isSubmitting}
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "1rem",
              fontWeight: "bold",
              padding: "0.8rem 0",
              fontSize: "1.1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              marginBottom: "0.8rem"
            }}
          />
        </form>
        {errorMessage && <p className="error-message" style={{color: "#ff512f", margin: 0, marginBottom: "1rem"}}>{errorMessage}</p>}
        <div style={{width: "100%", textAlign: "center", margin: "1rem 0"}}>
          <span style={{color: "#888"}}>OR</span>
        </div>
        <Link to="/signup" style={{
          color: "#0d4888",
          fontWeight: 600,
          textDecoration: "none",
          border: "1px solid #e0e7ff",
          borderRadius: "1rem",
          padding: "0.6rem 1.5rem",
          background: "#f8fafc",
          transition: "background 0.2s"
        }}>Signup Page</Link>
      </div>
    </div>
  );
}

export default Login;
