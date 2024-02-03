import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
        <Link to="/">Home</Link>
        <Link to="/SAC">Meet SAC!</Link>
        <Link to="/Event">Event Calender</Link>
        <Link to="/Clubs">Clubs</Link>
        <Link to="/FAQ">FAQ</Link>
    </div>
  )
}

export default Navbar