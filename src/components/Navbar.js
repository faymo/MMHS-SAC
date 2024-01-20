import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Event">Event Calender</Link>
        <Link to="/SAC">Meet SAC!</Link>
        <Link to="/Clubs">Clubs</Link>
        <Link to="/Other">Other</Link>
    </div>
  )
}

export default Navbar