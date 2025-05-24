import React from "react";
import Header from "../components/Header"; // Add Header import

function Explore() {
  return (
    <>
      <Header />
      <div style={{
        minHeight: "80vh",
        background: "linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "90px"
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 24px rgba(13,72,136,0.10)",
          padding: "3rem 2rem",
          textAlign: "center"
        }}>
          <h1 style={{color: "#0d4888", fontWeight: 700, marginBottom: "1rem"}}>Explore Domino's</h1>
          <p style={{color: "#555", fontSize: "1.2rem"}}>Discover our menu, stores, offers, and more. Stay tuned for exciting features!</p>
        </div>
      </div>
    </>
  );
}

export default Explore;