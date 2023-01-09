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
                  <li><Link className='in-flex-center align-items-start' onClick={closeMenu} to={URL_ROUTES.index} rel="noreferrer" > <ion-icon class="ms-2" size="large" name="home-outline"></ion-icon> Home </Link></li>
                  <li><Link className='in-flex-center align-items-start' onClick={closeMenu} to={URL_ROUTES.projects} rel="noreferrer" > <ion-icon class="ms-2" size="large" name="code-slash-outline"></ion-icon> Projects </Link></li>
                  <li><Link className='in-flex-center align-items-start' onClick={closeMenu} to={URL_ROUTES.about} rel="noreferrer" > <ion-icon class="ms-2" size="large" name="person-outline"></ion-icon> About </Link></li>
                  <li><Link className='in-flex-center align-items-start' onClick={closeMenu} to={URL_ROUTES.contact} rel="noreferrer" > <ion-icon class="ms-2" size="large" name="mail-outline"></ion-icon> Contact </Link></li>     
              </ul>
              </div>
          </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className='nav-item'>
              <Link className='nav-link in-flex-center align-items-start' to={URL_ROUTES.index} > <ion-icon name="home-outline"></ion-icon>  Home </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link in-flex-center align-items-start' to={URL_ROUTES.projects} > <ion-icon name="code-slash-outline"></ion-icon> Projects </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link in-flex-center align-items-start' to={URL_ROUTES.about} > <ion-icon name="person-outline"></ion-icon> About </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link in-flex-center align-items-start' to={URL_ROUTES.contact} > <ion-icon name="mail-outline"></ion-icon> Contact </Link>
            </li>
          </ul>          
        </div>
      </div>
    </nav>
  )
}
