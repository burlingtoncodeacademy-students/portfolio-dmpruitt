import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/projects" >Projects</Link>
      <Link to="/interests" >Interests</Link>
      <Link to="/workhistory" >Work History</Link>

    </>
  );
}
export default Portfolio;
