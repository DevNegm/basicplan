import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (


<nav className="navbar navbar-expand-lg bg-body-dark">
<div className="container px-lg-0 px-4">
  <Link className='navbar-brand' to="/">Logo</Link>
  <button className="navbar-toggler border-0 shadow-none p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon border-0 p-0"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
      <Link className='nav-link' to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link' to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link' to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
  )
}

export default Navbar