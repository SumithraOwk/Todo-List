// src/components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Built with ❤️ by Team Sumithra</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: "center",
  padding: "1rem",
  marginTop: "2rem",
  backgroundColor: "#f4f4f4",
  color: "#555",
  fontSize: "0.9rem"
};

export default Footer;
