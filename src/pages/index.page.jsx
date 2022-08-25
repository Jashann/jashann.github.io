import React from 'react'
import { Link } from 'react-router-dom';
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'


export default function IndexPage() {
  return (
    <>
        <header className="main-header">
            <div className="main-header-btns d-flex">
                <Link to={URL_ROUTES.projects} className="m-1 btn btn-secondary">Projects <ion-icon size="large" name="laptop-outline"></ion-icon> </Link>
                <Link to={URL_ROUTES.about} className="m-1 btn btn-secondary">About Me <ion-icon size="large" name="book-outline"></ion-icon> </Link>
            </div>
        </header>
    </>
  )
}
