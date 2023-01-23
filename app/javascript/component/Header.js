import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <ul class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between">
            <li class="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li class="nav-item ms-5">
              <NavLink to="/greeting" className="nav-link">Greeting</NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header