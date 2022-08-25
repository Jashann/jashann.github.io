import React from 'react'
import { Link } from 'react-router-dom'
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'

export default function Navbar() {

  function closeMenu () {
    document.querySelector(".toggler").checked = false;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        
        <Link className="navbar-brand container-center" to={URL_ROUTES.index}>
           <p className='m-0 logo-text'>Jashanjot</p>
        </Link>

        <div className="mobile-menu">

          <input type="checkbox" className="toggler" aria-checked="false" tabIndex="0" />
          <div className="hamburger"><div></div></div>
          <div className="menu">
          <div>
              <div>
              <ul>
                  <li><Link onClick={closeMenu} to={URL_ROUTES.index} rel="noreferrer" > Home </Link></li>
                  <li><Link onClick={closeMenu} to={URL_ROUTES.projects} rel="noreferrer" > Projects </Link></li>
                  <li><Link onClick={closeMenu} to={URL_ROUTES.about} rel="noreferrer" > About Me </Link></li>
                  <li><Link onClick={closeMenu} to={URL_ROUTES.contact} rel="noreferrer" > Contact Me </Link></li>     
              </ul>
              </div>
          </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className='nav-item'>
              <Link className='nav-link' to={URL_ROUTES.index} > Home </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={URL_ROUTES.projects} > Projects </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={URL_ROUTES.about} > About Me </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={URL_ROUTES.contact} > Contact Me </Link>
            </li>
          </ul>          
        </div>
      </div>
    </nav>
  )
}
