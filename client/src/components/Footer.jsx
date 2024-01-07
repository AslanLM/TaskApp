import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-copy">
      <h3>Task Management App 2024 &copy; By: <Link to='https://github.com/AslanLM/TaskApp' target='blank'>Aslanlm</Link></h3>
    </div>
  </footer>
  )
}

export default Footer